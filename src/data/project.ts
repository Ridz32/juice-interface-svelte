import { BigNumber } from 'ethers';
import { SECONDS_IN_DAY } from '$constants/numbers';
import axios from 'axios';
import { consolidateMetadata, type ProjectMetadataV4 } from '$models/project-metadata';
import {
    querySubgraph,
    querySubgraphExhaustive,
    type EntityKeys,
    type GraphQueryOpts,
    type InfiniteGraphQueryOpts,
    type WhereConfig
} from '$utils/graph';
import type { ProjectState } from '$models/project-visibility'
import type { V1TerminalVersion } from '$models/v1/terminals'
import { ipfsCidUrl, uploadIpfsJsonCache } from '$utils/ipfs';
import { getTerminalAddress } from '$utils/v1/terminals'
import { archivedProjectIds } from '$constants/v1/archivedProjects'

import {
    parseTrendingProjectJson,
    type Project,
    type TrendingProject,
    type TrendingProjectJson,
} from '$models/subgraph-entities/project';
import { getIpfsCache } from './ipfs';
import { IpfsCacheName } from '$models/ipfs-cache/cache-name';


type ProjectStat = Record<string, {
    trendingVolume: BigNumber;
    paymentsCount: number;
}>;

interface ProjectsOptions {
    pageNumber?: number
    projectId?: BigNumber
    handle?: string
    uri?: string
    orderBy?: 'createdAt' | 'currentBalance' | 'totalPaid'
    orderDirection?: 'asc' | 'desc'
    pageSize?: number
    state?: ProjectState
    keys?: (keyof Project)[]
    terminalVersion?: V1TerminalVersion
    searchText?: string
}

const defaultKeys: (keyof Project)[] = [
    'id',
    'handle',
    'creator',
    'createdAt',
    'uri',
    'currentBalance',
    'totalPaid',
    'totalRedeemed',
    'terminal'
];

const queryOpts = (
    opts: ProjectsOptions,
): Partial<
    | GraphQueryOpts<'project', EntityKeys<'project'>>
    | InfiniteGraphQueryOpts<'project', EntityKeys<'project'>>
> => {
    const where: WhereConfig<'project'>[] = []

    const terminalAddress = getTerminalAddress(opts.terminalVersion)

    if (terminalAddress) {
        where.push({
            key: 'terminal' as const,
            value: terminalAddress,
        })
    }

    if (opts.state === 'archived') {
        where.push({
            key: 'id' as const,
            value: archivedProjectIds,
            operator: 'in',
        })
    } else if (opts.projectId) {
        where.push({
            key: 'id' as const,
            value: opts.projectId.toString(),
        })
    }

    return {
        entity: 'project',
        keys: opts.keys ?? defaultKeys,
        orderDirection: opts.orderDirection ?? 'desc',
        orderBy: opts.orderBy ?? 'totalPaid',
        pageSize: opts.pageSize,
        where,
    }
}

export async function getProjects(opts: ProjectsOptions) {
    return querySubgraph(
        {
            ...(queryOpts(opts) as GraphQueryOpts<'project', EntityKeys<'project'>>),
            first: opts.pageSize,
            skip:
                opts.pageNumber && opts.pageSize
                    ? opts.pageNumber * opts.pageSize
                    : undefined,
        }
    )
}

export async function getProjectMetadata(uri: string | undefined) {
    if (!uri) {
        console.error('No uri provided');
        return;
    }
    const url = ipfsCidUrl(uri);
    const response = await axios.get(url);
    return consolidateMetadata(response.data);
}

export function getProjectStatsFromPayments(payments = []) {
    return payments.reduce((acc, curr) => {
        const projectId = curr.project.id?.toString();
        return projectId
            ? {
                ...acc,
                [projectId]: {
                    trendingVolume: BigNumber.from(acc[projectId]?.trendingVolume ?? 0).add(curr.amount),
                    paymentsCount: (acc[projectId]?.paymentsCount ?? 0) + 1
                }
            }
            : acc;
    }, {} as ProjectStat);
}

export function getTrendingProjectsFromProjectsAndStats(projects = [], projectStats = {}) {
    return projects
        ?.map(p => {
            const stats = p.id && projectStats ? projectStats[p.id.toString()] : undefined;

            // Algorithm to rank trending projects:
            // trendingScore = volume * (number of payments)^2
            const trendingScore = stats?.trendingVolume.mul(BigNumber.from(stats.paymentsCount).pow(2));

            return {
                ...p,
                trendingScore,
                trendingVolume: stats?.trendingVolume,
                trendingPaymentsCount: stats?.paymentsCount
            } as TrendingProject;
        })
        .sort((a: TrendingProject, b: TrendingProject) =>
            a.trendingScore?.gt(b.trendingScore ?? 0) ? -1 : 1
        )
}

export async function getLatestPayments(days = 7) {
    const daySeconds = days * SECONDS_IN_DAY;
    const now = new Date().setUTCHours(0, 0, 0, 0); // get start of day, for determinism
    const nowSeconds = now.valueOf() / 1000;

    return await querySubgraphExhaustive({
        entity: 'payEvent',
        keys: [
            'amount',
            {
                entity: 'project',
                keys: ['id']
            }
        ],
        where: [
            {
                key: 'timestamp',
                value: nowSeconds - daySeconds,
                operator: 'gte'
            }
        ]
    });
}

export async function getProjectsFromIds(ids: string[], keys = defaultKeys) {
    return await querySubgraph({
        entity: 'project',
        keys,
        where: {
            key: 'id',
            value: ids,
            operator: 'in'
        }
    });
}

export async function getTrendingProjects(days: number, count: number) {
    console.info('Loading trending cache')
    const cache = await getIpfsCache(IpfsCacheName.trending, { ttl: 12, deserialize: data => data.map(parseTrendingProjectJson) });

    if (cache && cache.length >= count) {
        console.info('Using trending cache')
        return cache.slice(0, count);
    }

    console.info('Trending cache missing or expired')

    const payments = await getLatestPayments(days);
    const projectStats = getProjectStatsFromPayments(payments);
    // Now get the project data for all the projectStats
    const projectsQuery = await getProjectsFromIds(Object.keys(projectStats));
    const trendingProjects = getTrendingProjectsFromProjectsAndStats(projectsQuery, projectStats).slice(
        0,
        count
    );

    if (trendingProjects.length) {
        // Update the cache
        const serialized = trendingProjects.map(p =>
            Object.entries(p).reduce(
                (acc, [key, val]) => ({
                    ...acc,
                    // Serialize all BigNumbers to strings
                    [key]: BigNumber.isBigNumber(val) ? val.toString() : val,
                }),
                {} as TrendingProjectJson,
            ),
        )
        uploadIpfsJsonCache(IpfsCacheName.trending, serialized).then(() => {
            console.info("Uploaded new trending cache")
        });
    }

    return trendingProjects;
}
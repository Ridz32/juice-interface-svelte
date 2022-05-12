import { BigNumber } from 'ethers';
import { SECONDS_IN_DAY } from '$constants/numbers';
import axios from 'axios';
import { consolidateMetadata } from '$models/project-metadata';
import {
	querySubgraph,
	querySubgraphExhaustive,
	type EntityKeys,
	type GraphQueryOpts,
	type InfiniteGraphQueryOpts,
	type WhereConfig
} from '$utils/graph';
import type { ProjectState } from '$models/project-visibility';
import { getIpfsCache } from './ipfs';
import { uploadIpfsJsonCache  } from '$utils/ipfs';
import {
    parseTrendingProjectJson,
    type Project,
    type TrendingProject,
    type TrendingProjectJson,
} from '$models/subgraph-entities/vX/project';
import { IpfsCacheName } from '$models/ipfs-cache/cache-name';

// TODO don't hardcode this here, use the utils/ipfs after issue with @pinata/sdk has been solved
import { IPFS_GATEWAY_HOSTNAME } from '$constants/ipfs';
const ipfsCidUrl = (hash: string) => `https://${IPFS_GATEWAY_HOSTNAME}/ipfs/${hash}`;

type ProjectStat = Record<
	string,
	{
		trendingVolume: BigNumber;
		paymentsCount: number;
	}
>;

interface ProjectsOptions {
	pageNumber?: number;
	projectId?: BigNumber;
	handle?: string;
	metadataUri?: string;
	orderBy?: 'createdAt' | 'currentBalance' | 'totalPaid';
	orderDirection?: 'asc' | 'desc';
	pageSize?: number;
	state?: ProjectState;
	keys?: (keyof Project)[];
	searchText?: string;
	cv?: string;
}

const keys: (keyof Project)[] = [
	'id',
	'handle',
	'owner',
	'createdAt',
	'metadataUri',
	'currentBalance',
	'totalPaid',
	'totalRedeemed',
	'terminal'
];

const queryOpts = (
	opts: ProjectsOptions
): Partial<
	| GraphQueryOpts<'project', EntityKeys<'project'>>
	| InfiniteGraphQueryOpts<'project', EntityKeys<'project'>>
> => {
	const where: WhereConfig<'project'>[] = [];

	if (opts.projectId) {
		where.push({
			key: 'id' as const,
			value: opts.projectId.toString()
		});
	}

	if (opts.cv) {
		where.push({
			key: 'cv' as const,
			value: opts.cv,
		});
	}

	return {
		entity: 'project',
		keys: opts.keys ?? keys,
		orderDirection: opts.orderDirection ?? 'desc',
		orderBy: opts.orderBy ?? 'totalPaid',
		pageSize: opts.pageSize,
		where
	};
};

export async function getProjects(opts: ProjectsOptions) {
	return querySubgraph({
		...(queryOpts(opts) as GraphQueryOpts<'project', EntityKeys<'project'>>),
		first: opts.pageSize,
		skip: opts.pageNumber && opts.pageSize ? opts.pageNumber * opts.pageSize : undefined
	});
}

export function getProjectsByHandle(handle: string | undefined) {
	return querySubgraph(
		handle
			? {
					text: `${handle}:*`,
					entity: 'projectSearch',
					keys
			  }
			: null
	);
}

export async function getProjectMetadata(metadataUri: string | undefined) {
	if (!metadataUri) {
		console.error('No metadataUri provided');
		return;
	}
	const url = ipfsCidUrl(metadataUri);
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
		?.map((p) => {
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
		);
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
			},
			// TODO: this shouldn't be hardcoded here
			// but will do for now to get v2 projects
			{
				key: 'cv',
				value: '2',
			}
		]
	});
}

export async function getProjectsFromIds(ids: string[]) {
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

export async function trendingProjectsQuery(count: number, trendingWindowDays: number) {
	const payments = await getLatestPayments(trendingWindowDays);
	const projectStats = await getProjectStatsFromPayments(payments);
	const ids = Object.keys(projectStats);
	const projectsQuery = await getProjectsFromIds(ids);
	const trendingProjects = getTrendingProjectsFromProjectsAndStats(
		projectsQuery,
		projectStats
	).slice(0, count);
	return trendingProjects;
}

export async function myProjectsQuery(wallet: string | undefined) {
	const projectsQuery = await querySubgraph(
		wallet
			? {
					entity: 'project',
					keys,
					where: {
						key: 'owner',
						operator: 'in',
						value: [wallet]
					}
			  }
			: null
	);

	return projectsQuery;
}

export async function holdingsProjectsQuery(wallet: string | undefined) {
	const loadParticipants = async () => {
		const participants = await querySubgraphExhaustive(
			wallet
				? {
						entity: 'participant',
						orderBy: 'balance',
						orderDirection: 'desc',
						keys: [
							{
								entity: 'project',
								keys: ['id']
							}
						],
						where: [
							{
								key: 'wallet',
								value: wallet
							}
						]
				  }
				: null
		);

		if (!participants) {
			return;
		}

		const projectIds = participants?.reduce((acc, curr) => {
			const projectId = curr?.project?.id?.toString();

			return [...acc, ...(projectId ? (acc.includes(projectId) ? [] : [projectId]) : [])];
		}, [] as string[]);

		return projectIds;
	};

	const projectIds = await loadParticipants();

	const projectsQuery = await querySubgraph(
		projectIds
			? {
					entity: 'project',
					keys,
					where: {
						key: 'id',
						operator: 'in',
						value: projectIds
					}
			  }
			: null
	);

	return projectsQuery;
}

export function infiniteProjectsQuery(opts: ProjectsOptions) {
	return querySubgraphExhaustive(
		queryOpts(opts) as InfiniteGraphQueryOpts<'project', EntityKeys<'project'>>
	);
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
        console.log(serialized)
        uploadIpfsJsonCache(IpfsCacheName.trending, serialized).then(() => {
            console.info("Uploaded new trending cache")
        });
    }

    return trendingProjects;
}

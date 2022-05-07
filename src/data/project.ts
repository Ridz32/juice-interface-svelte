import { BigNumber } from 'ethers';
import { SECONDS_IN_DAY } from '$constants/numbers';
import { querySubgraph, querySubgraphExhaustive } from '$utils/graph';

import type {
    // parseTrendingProjectJson,
    Project,
    TrendingProject,
    TrendingProjectJson
} from '$models/subgraph-entities/project';

type ProjectStat = Record<string, {
    trendingVolume: BigNumber;
    paymentsCount: number;
}>;

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
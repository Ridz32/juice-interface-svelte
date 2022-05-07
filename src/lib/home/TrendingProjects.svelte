<script lang="ts">
	import { onMount } from 'svelte';
	import { BigNumber } from 'ethers';
	import { SECONDS_IN_DAY } from '$constants/numbers';
	import { querySubgraph, querySubgraphExhaustive } from '$utils/graph';
	import Icon from '$lib/components/Icon.svelte';
	import type {
		// parseTrendingProjectJson,
		Project,
		TrendingProject,
		TrendingProjectJson
	} from '$models/subgraph-entities/project';
	import TrendingProjectsCard from '$lib/components/TrendingProjectsCard.svelte';

	export let days = 7;
	export let count = 6;

	const daySeconds = days * SECONDS_IN_DAY;
	const now = new Date().setUTCHours(0, 0, 0, 0); // get start of day, for determinism
	const nowSeconds = now.valueOf() / 1000;

	let trendingProjects: TrendingProject[] = [];
	let trendingProjectsLoading = true;

	const keys: (keyof Project)[] = [
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

	type ProjectStat = Record<
		string,
		{
			trendingVolume: BigNumber;
			paymentsCount: number;
		}
	>;

	function getProjectStatsFromPayments(payments = []) {
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

	function getTrendingProjectsFromProjectsAndStats(projects = [], projectStats = {}) {
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
			)
			.slice(0, count);
	}

	onMount(async () => {
		const payments = await querySubgraphExhaustive({
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
		const projectStats = getProjectStatsFromPayments(payments);
		// Now get the projectQuery for all the projectStats
		const projectsQuery = await querySubgraph(
			projectStats
				? {
						entity: 'project',
						keys,
						where: {
							key: 'id',
							value: Object.keys(projectStats),
							operator: 'in'
						}
				  }
				: null
		);
		trendingProjectsLoading = false;
		trendingProjects = getTrendingProjectsFromProjectsAndStats(projectsQuery, projectStats);
	});
</script>

<section>
	<article>
		<div class="image-wrapper">
			<img src="/images/green_orange.png" alt="green_orange" />
		</div>
		<div class="projects">
			<h1>Trending projects</h1>
			<!-- <Icon name="loading" spin={true} /> -->
			{#if trendingProjectsLoading}
				<div class="loading">
					<Icon name="loading" spin={true} />
				</div>
			{:else}
				<ul>
					{#each trendingProjects as project, rank}
						<TrendingProjectsCard {rank} {project} {days} />
					{/each}
				</ul>
			{/if}
		</div>
	</article>
</section>

<style>
	h1 {
		color: var(--text-header);
		font-weight: 600;
		margin-left: 40px;
	}

	article {
		margin: auto;
		max-width: 1200px;
		display: flex;
	}

	section {
		margin: 150px 0px;
		padding: 40px 40px 0px;
		background: var(--background-l2);
	}

	img {
		display: none;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
	}

	.loading {
		color: var(--text-header);
		transform: scale(2);
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		min-height: 400px;
		min-width: 400px;
	}

	@media (min-width: 992px) {
		img {
			display: block;
			height: 550px;
		}

		.image-wrapper {
			display: flex;
			align-items: flex-end;
			justify-content: center;
		}

		.projects {
			display: block;
			flex: 0 0 62.5%;
			max-width: 62.5%;
		}
	}
</style>

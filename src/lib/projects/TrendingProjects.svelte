<script lang="ts">
	import { trendingProjectsQuery } from '$data/project';

	import Icon from '$lib/components/Icon.svelte';
	import TrendingProjectsCard from '$lib/components/TrendingProjectsCard.svelte';
	import type { TrendingProject } from '$models/subgraph-entities/project';
	import { onMount } from 'svelte';

	export let trendingProjectCount = 12;
	export let trendingWindowDays = 7;

	let trendingProjects: TrendingProject[] | undefined = undefined;
	let trendingProjectsLoading = true;

	onMount(async () => {
		trendingProjects = await trendingProjectsQuery(trendingProjectCount, trendingWindowDays);
		trendingProjectsLoading = false;
	});
</script>

<p>
	{#if trendingProjectsLoading}
		<div class="loading">
			<Icon name="loading" spin={true} />
		</div>
	{:else}
		<ul>
			{#each trendingProjects as project, rank}
				<TrendingProjectsCard {rank} {project} days={trendingWindowDays} />
			{/each}
		</ul>
		<span>
			<Icon name="info" />
		</span>
		Rankings based on number of contributions and volume gained in the last 7 days.
		<a
			href="https://github.com/jbx-protocol/juice-interface/blob/main/src/hooks/v1/Projects.ts#L229"
			target="_blank"
			rel="noopener noreferrer">See code</a
		>
	{/if}
</p>

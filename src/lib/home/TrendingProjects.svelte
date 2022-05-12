<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { TrendingProject } from '$models/subgraph-entities/vX/project';
	import TrendingProjectsCard from '$lib/components/TrendingProjectsCard.svelte';
	import Trans from '$lib/components/Trans.svelte';
import { trendingProjectsQuery } from '$data/project';

	export let days = 7;
	export let count = 6;

	let trendingProjects: TrendingProject[] = [];
	let trendingProjectsLoading = true;

	onMount(async () => {
		trendingProjects = await trendingProjectsQuery(6, 7);
		trendingProjectsLoading = false;
	});
</script>

<section>
	<article>
		<div class="image-wrapper">
			<img src="/images/green_orange.png" alt="green_orange" />
		</div>
		<div class="projects">
			<h1>
				<Trans message="Trending projects" />
			</h1>
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
		gap: 10px;
		padding-inline-start: 0px;
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

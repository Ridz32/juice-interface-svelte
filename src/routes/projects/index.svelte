<script lang="ts">
	import TrendingProjects from '$lib/projects/TrendingProjects.svelte';
	import AllProjects from '$lib/projects/AllProjects.svelte';
	import HoldingsProjects from '$lib/projects/HoldingsProjects.svelte';
	import MyProjects from '$lib/projects/MyProjects.svelte';
	import ProjectsInfo from '$lib/projects/ProjectsInfo.svelte';
	import ProjectsTabs from '$lib/projects/ProjectsTabs.svelte';
	import ProjectsSearch from '$lib/projects/ProjectsSearch.svelte';

	import {
		selectedProjectsTab,
		scrollTarget,
		hasSearched,
		searchResults,
		isSearching,
		searchText
	} from '$stores/projectsForm';
	import ProjectsFilterAndSort from '$lib/projects/ProjectsFilterAndSort.svelte';
	import ProjectsSearchResults from '$lib/projects/ProjectsSearchResults.svelte';
</script>

<div bind:this={$scrollTarget} class="wrapper">
	<section id="projects">
		<ProjectsInfo />
		<ProjectsSearch />
		{#if $hasSearched}
			<ProjectsSearchResults
				projects={$searchResults}
				loading={$isSearching}
				searchText={$searchText}
			/>
		{:else}
			<div class="controls">
				<ProjectsTabs />
				{#if $selectedProjectsTab === 'all'}
					<ProjectsFilterAndSort />
				{/if}
			</div>

			{#if $selectedProjectsTab === 'trending'}
				<TrendingProjects />
			{:else if $selectedProjectsTab === 'holdings'}
				<HoldingsProjects />
			{:else if $selectedProjectsTab === 'myprojects'}
				<MyProjects />
			{:else if $selectedProjectsTab === 'all'}
				<AllProjects />
			{/if}
		{/if}
	</section>
</div>

<style>
	:global(#projects .loading) {
		position: absolute;
		left: 0;
		text-align: center;
		transform: scale(2);
		width: 100vw;
	}

	section {
		max-width: 1000px;
		margin: auto;
		margin-top: 40px;
		padding: 0 20px;
	}
	.controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		max-width: 100vw;
		height: 80px;
		position: relative;
	}

	.wrapper {
		height: 100vh;
		overflow-y: scroll;
	}

	@media (max-width: 768px) {
		.wrapper {
			margin-top: 20px;
		}
	}
</style>

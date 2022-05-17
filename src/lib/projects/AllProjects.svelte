<script lang="ts">
	import { onMount } from 'svelte';
	import { getProjects } from '$data/project';
	import Icon from '$lib/components/Icon.svelte';
	import type { Project } from '$models/subgraph-entities/vX/project';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';
	import { scrollTarget, showArchived, sortType } from '$stores/projectsForm';

	let loading = false;
	let pageNumber = 0;
	let projects: Project[] | undefined = [];
	let newBatch: Project[] | undefined = [];

	let previousFetch = {
		showArchived: false,
		orderBy: 'totalPaid'
	};

	const pageSize = 10;

	const fetchData = async () => {
		loading = true;
		newBatch = await getProjects({
			orderBy: $sortType,
			pageNumber,
			pageSize,
			orderDirection: 'desc',
			state: showArchived ? 'archived' : 'active',
		});
		loading = false;
	};

	onMount(async () => {
		await fetchData();
	});

	$: projects = [...projects, ...newBatch];
	$: {
		if (previousFetch.orderBy !== $sortType || previousFetch.showArchived !== $showArchived) {
			pageNumber = 0;
			projects = [];
			fetchData().then(() => {
				previousFetch.orderBy = $sortType;
				previousFetch.showArchived = $showArchived;
			});
		}
	}
</script>

<section>
	{#if !projects.length && loading}
		<div class="loading">
			<Icon name="loading" spin />
		</div>
	{/if}
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
	<InfiniteScroll
		elementScroll={$scrollTarget}
		hasMore={!!newBatch.length}
		threshold={100}
		on:loadMore={() => {
			pageNumber += 1;
			fetchData();
		}}
	/>
</section>

<style>
	section {
		margin: auto;
		display: grid;
		max-width: 1000px;
		grid-column-gap: 20px;
		grid-row-gap: 12px;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-auto-flow: row;
	}
</style>

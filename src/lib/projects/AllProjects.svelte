<script lang="ts">
	import { onMount } from 'svelte';
	import { getProjects } from '$data/project';
	import Icon from '$lib/components/Icon.svelte';
	import { sortType } from '$stores/projectsForm';
	import type { Project } from '$models/subgraph-entities/vX/project';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';

	let loading = false;
	let pageNumber = 0;
	let projects: Project[] | undefined = [];
	let newBatch: Project[] | undefined = [];
	let scrollTarget: HTMLElement;

	const showArchived = false;
	const pageSize = 10;

	const fetchData = async () => {
		loading = true;
		newBatch = await getProjects({
			orderBy: $sortType,
			pageNumber,
			pageSize,
			orderDirection: 'desc',
			state: showArchived ? 'archived' : 'active',
			cv: '2'
		});
		loading = false;
	};

	onMount(async () => {
		await fetchData();
	});

	// TODO put back in, for now it's double loading on mount
	// sortType.subscribe(async () => {
	// 	await fetchData();
	// });

	$: projects = [...projects, ...newBatch];
</script>

<main bind:this={scrollTarget}>
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
			elementScroll={scrollTarget}
			hasMore={!!newBatch.length}
			threshold={100}
			on:loadMore={() => {
				pageNumber += 1;
				fetchData();
			}}
		/>
	</section>
</main>

<style>
	main {
		max-height: 80vh;
		overflow-y: scroll;
		position: absolute;
		left: 0;
		width: 100vw;
	}
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

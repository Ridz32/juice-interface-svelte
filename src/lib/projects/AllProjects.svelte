<script lang="ts">
	import { infiniteProjectsQuery } from '$data/project';

	import Icon from '$lib/components/Icon.svelte';
	import { sortType } from '$stores/projectsForm';
	import { onMount } from 'svelte';
	import type { Project } from '$models/subgraph-entities/project';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let loading = false;
	let projects: Project[] | undefined = undefined;
	const showArchived = false;
	const pageSize = 25;

	const fetchData = async () => {
		loading = true;
		projects = await infiniteProjectsQuery({
			orderBy: $sortType,
			pageSize,
			orderDirection: 'desc',
			state: showArchived ? 'archived' : 'active',
			terminalVersion: '1.1'
		});
		loading = false;
	};

	onMount(async () => {
		await fetchData();
	});

	sortType.subscribe(async () => {
		await fetchData();
	});
</script>

<p>
	{#if loading}
		<div class="loading">
			<Icon name="loading" spin={true} />
		</div>
	{:else if projects && projects.length > 0}
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	{/if}
</p>

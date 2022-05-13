<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$models/subgraph-entities/project';
	import { connectedAccount } from '$stores/web3';
	import { holdingsProjectsQuery } from '$data/project';
	import ProjectCount from './ProjectCount.svelte';

	let projects: Project[] | undefined = undefined;
	let holdingsProjectsLoading = true;

	onMount(async () => {
		if ($connectedAccount !== '') {
			const res = await holdingsProjectsQuery($connectedAccount);
			projects = res;
		}
		holdingsProjectsLoading = false;
	});
</script>

<p>
	{#if holdingsProjectsLoading}
		<div class="loading">
			<Icon name="loading" spin={true} />
		</div>
	{:else if projects && projects.length > 0}
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
		<ProjectCount count={projects.length} />
		<span>
			<Icon name="info" />
		</span>
		Projects that you hold tokens for.
	{:else}
		<p>You don't hold tokens for any Juicebox project.</p>
	{/if}
</p>

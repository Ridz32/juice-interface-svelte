<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$models/subgraph-entities/project';
	import { connectedAccount } from '$stores/web3';
	import { holdingsProjectsQuery } from '$data/project';

	let projects: Project[] | undefined = undefined;

	onMount(async () => {
		if ($connectedAccount !== '') {
			const res = await holdingsProjectsQuery($connectedAccount);
			projects = res;
		}
	});
</script>

<p>
	{#if projects && projects.length > 0}
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
		<span>
			<Icon name="info" />
		</span>
		Projects that you hold tokens for.
	{:else}
		<p>You don't hold tokens for any Juicebox project.</p>
	{/if}
</p>

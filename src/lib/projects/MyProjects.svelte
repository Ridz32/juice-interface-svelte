<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';

	import { connectedAccount } from '$stores/web3';
	import { myProjectsQuery } from '$data/project';
	import type { Project } from '$models/subgraph-entities/project';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let projects: Project[] | undefined = undefined;

	onMount(async () => {
		if ($connectedAccount !== '') {
			const res = await myProjectsQuery($connectedAccount);
			projects = res;
		}
	});
</script>

<div>
	{#if projects && projects.length > 0}
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
		<p>
			<span>
				<Icon name="info" />
			</span>
			Projects you have created.
		</p>
	{:else}
		<p>You haven't created any projects yet.</p>
		<a href="create">
			<button type="button" class="ant-btn ant-btn-primary ant-btn-md">Create project</button>
		</a>
	{/if}
</div>

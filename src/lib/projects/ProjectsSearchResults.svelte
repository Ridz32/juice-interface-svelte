<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$models/subgraph-entities/project';
	import ProjectCount from './ProjectCount.svelte';

	export let projects: Project[];
	export let searchText: string;
	export let loading = false;
</script>

<p>
	{#if loading}
		<div class="loading">
			<Icon name="loading" spin={true} />
		</div>
	{:else}
		{#if projects.length > 0}
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		{/if}
		{projects.length} projects matching "{searchText}"
		{#if projects.length === 0}
			<p>
				<span>
					<Icon name="info" />
				</span>Projects on Juicebox V2 don't currently appear in these results.
			</p>
		{/if}
	{/if}
</p>

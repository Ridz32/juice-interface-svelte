<script lang="ts">
	import { getContext } from 'svelte';
	import type Store from '$utils/Store';
	import type { Project } from '$models/subgraph-entities/project';
	import type { ProjectMetadata } from '$models/project-metadata';
	import Icon from '$lib/components/Icon.svelte';
	import PayEvent from './PayEvent.svelte';

	const projectContext = getContext('PROJECT') as {
		project: Store<Project>;
		metadata: Store<ProjectMetadata>;
	};
	const project = projectContext.project;
	const payEvents = $project.payEvents;
	console.log(payEvents);
	export let loading: boolean;
</script>

<!-- {#each projectCategories as category}
	<p>{category}</p>
{/each} -->

<section>
	{#if loading}
		<Icon name="loading" spin />
	{/if}
	{#each payEvents as payment}
		<PayEvent {payment} />
	{/each}
</section>

<style>
	section {
		flex: 0 0 50%;
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;
		margin-top: 40px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		section {
			flex: 0 0 100%;
		}
	}
</style>

<script lang="ts" context="module">
	import { browser } from '$app/env';
	export const hydrate = true;
	export const router = browser;
	export const prerender = true;
</script>

<script lang="ts">
	import Head from '$lib/project/Head.svelte';
	import Stats from '$lib/project/Stats.svelte';
	import Details from '$lib/project/Details.svelte';
	import Activity from '$lib/project/Activity.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { onMount, setContext } from 'svelte';
	import { querySubgraph } from '$utils/graph';
	import Store from '$utils/Store';
	import type { Project } from '$models/subgraph-entities/project';
	import { page } from '$app/stores';
	import type { ProjectMetadata, ProjectMetadataV4 } from '$models/project-metadata';
	import { getProjectMetadata } from '$data/project';

	let project = new Store<Project>();
	let metadata = new Store<ProjectMetadata>();

	let loading = true;
	setContext('PROJECT', { project, metadata });

	onMount(async () => {
		const [res] = await querySubgraph({
			entity: 'project',
			keys: [
				'id',
				'handle',
				'createdAt',
				'creator',
				'uri',
				'currentBalance',
				'distributeToPayoutModEvents',
				'totalPaid',
				'totalRedeemed'
			],
			where: [
				{
					key: 'id',
					value: $page.params.projectId
				}
			]
		});
		$project = res;
		console.log(res);
		const response = await getProjectMetadata(res.uri);
		$metadata = response;
		loading = false;
		console.log(response);
	});
</script>

<section>
	<div class="content">
		{#if loading}
			<Icon name="loading" spin />
		{:else}
			<div>
				<Head />
				<Stats />
				<div class="row">
					<Details />
					<Activity />
				</div>
			</div>
		{/if}
		<div style="text-align: center; padding: 20px;">
			<button type="button" class="ant-btn ant-btn-link">Back to top</button>
		</div>
		<a
			class="feedback-button hide-mobile "
			href="https://auditor.typeform.com/to/REMUTIbQ?project=juicebox&amp;address=0x283e4500fd7c9e1bf83b828f13a597b47311700c&amp;resolution=1139x984&amp;referrer=stoned-banny#"
			target="_blank"
			rel="noopener noreferrer"><img src="/images/stoned_banny.png" alt="Stoned banny" /></a
		>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: transparent;
	}

	.content {
		max-width: 1080px;
		margin: 0px auto;
		padding: 20px;
	}

	.row {
		display: flex;
		flex-flow: row wrap;
		margin-left: -20px;
		margin-right: -20px;
		padding-bottom: 40px;
		row-gap: 0px;
	}
</style>

<script lang="ts">
	import { consolidateMetadata } from '$models/project-metadata';

	import type { TrendingProject } from '$models/subgraph-entities/project';
	// import { querySubgraph } from '$utils/graph';
	// import { ipfsCidUrl } from '$utils/ipfs';
	import axios from 'axios';
	import { onMount } from 'svelte';

    import { IPFS_GATEWAY_HOSTNAME } from '$constants/ipfs';
    const ipfsCidUrl = (hash: string) => `https://${IPFS_GATEWAY_HOSTNAME}/ipfs/${hash}`;

    export let rank: number;
	export let project: TrendingProject;

	let metadata = {};

	export async function getProjectMetadata(uri: string | undefined) {
		if (!uri) {
			console.error('No uri provided');
			return;
		}
		const url = ipfsCidUrl(uri);
		const response = await axios.get(url);
        console.log(response.data);
		return consolidateMetadata(response.data);
	}

	onMount(async () => {
		metadata = await getProjectMetadata(project.uri);
	});
</script>

<li>
	<div class="rank">{rank + 1}</div>
	<img src={metadata.logoUri} alt="The project logo" />
</li>

<style>
	li {
		display: flex;
		padding: 10px;
		border: 1px solid var(--border-secondary);
	}

	.rank {
		font-size: 1.5rem;
	}
</style>

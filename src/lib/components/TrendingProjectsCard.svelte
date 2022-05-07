<script lang="ts">
	import axios from 'axios';
	import { consolidateMetadata, type ProjectMetadataV4 } from '$models/project-metadata';
	import type { TrendingProject } from '$models/subgraph-entities/project';
	import { SECONDS_IN_DAY } from '$constants/numbers';
	import Icon from '$lib/components/Icon.svelte';
	import EthAmount from './ETHAmount.svelte';

	// TODO don't hardcode this here, use the utils/ipfs after issue with @pinata/sdk has been solved
	import { IPFS_GATEWAY_HOSTNAME } from '$constants/ipfs';
	const ipfsCidUrl = (hash: string) => `https://${IPFS_GATEWAY_HOSTNAME}/ipfs/${hash}`;

	export let days: number;
	export let rank: number;
	export let project: TrendingProject;

	function getPercentGainText() {
		if (
			project.createdAt &&
			project.createdAt > new Date().valueOf() / 1000 - days * SECONDS_IN_DAY
		) {
			return 'New';
		}
		const preTrendingVolume = project.totalPaid?.sub(project.trendingVolume);
		if (!preTrendingVolume?.gt(0)) return '+∞';
		const percentGain = project.trendingVolume.mul(10000).div(preTrendingVolume).toNumber();
		let percentRounded: number;
		// If percentGain > 1, round to int
		if (percentGain >= 100) {
			percentRounded = Math.round(percentGain / 100);
			// If 0.1 <= percentGain < 1, round to 1dp
		} else if (percentGain >= 10) {
			percentRounded = Math.round(percentGain / 10) / 10;
			// If percentGain < 0.1, round to 2dp
		} else {
			percentRounded = percentGain / 100;
		}
		return `+${percentRounded}%`;
	}

	async function getProjectMetadata(uri: string | undefined) {
		if (!uri) {
			console.error('No uri provided');
			return;
		}
		const url = ipfsCidUrl(uri);
		const response = await axios.get(url);
		return consolidateMetadata(response.data);
	}
</script>

<li>
	<div class="rank">{rank + 1}</div>
	{#await getProjectMetadata(project.uri)}
		<p><Icon name="loading" spin /></p>
	{:then result}
		<img src={result.logoUri} alt="The project logo" />
		<section>
			<h1>{result.name}</h1>
			<EthAmount amount={project.trendingVolume} /> <span>last {days} days</span>
			<b>{getPercentGainText()}</b>
			<p>{project.trendingPaymentsCount} payment(s)</p>
		</section>
	{:catch error}
		<p style="color: var(--text-failure)">{error}</p>
	{/await}
</li>

<style>
	li {
		display: flex;
		flex: 0 0 45%;
		max-width: 45%;
		align-items: center;
		padding: 20px;
		border: 1px solid var(--stroke-secondary);
		margin: 10px;
	}

	h1 {
		font-size: 18px;
	}

	b {
		color: var(--text-header);
	}

	section {
		margin-left: 10px;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	p,
	span {
		font-weight: 300;
	}

	img {
		width: 80px;
		height: 80px;
	}

	.rank {
		font-size: 20px;
		margin-right: 20px;
	}

	@media (max-width: 768px) {
		li {
			flex: 0 0 100%;
			max-width: 100%;
		}
	}
</style>

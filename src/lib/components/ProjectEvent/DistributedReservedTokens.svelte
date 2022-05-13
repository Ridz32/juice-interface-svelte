<script lang="ts">
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import ETHAmount from '$lib/components/ETHAmount.svelte';
	import { formatHistoricalDate } from '$utils/formatDate';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';
	import EtherscanLink from '$lib/components/EtherscanLink.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import { querySubgraph } from '$utils/graph';
	import { onMount } from 'svelte';
	import type { DistributeReservedTokensEvent } from '$models/subgraph-entities/v2/distribute-reserved-tokens-event';
	import { formatWad } from '$utils/formatNumber';

	export let event: Partial<DistributeReservedTokensEvent>;

	let events = [];

	// TODO come back here after feedback from Peel.
	async function loadData() {
		events = await querySubgraph({
			entity: 'distributeToReservedTokenSplitEvent',
			keys: ['id', 'timestamp', 'txHash', 'beneficiary', 'tokenCount', 'projectId'],
			orderDirection: 'desc',
			orderBy: 'tokenCount',
			where: event?.id
				? {
						key: 'distributeReservedTokensEvent',
						value: event.id
				  }
				: undefined
		});
	}

	onMount(() => {
		// TODO this is mock data to work with the ui towards, don't forget to remove
		// events = loadData()
		events = [
			{
				id: '2-17-0xe2875f2cc07bfee2ef54d2b9d84c9a03c0ec4a7f6607f69739ed83474e544d7c-71',
				timestamp: 1652133829,
				txHash: '0xe2875f2cc07bfee2ef54d2b9d84c9a03c0ec4a7f6607f69739ed83474e544d7c',
				beneficiary: '0xabec871602cdb1361d95a301dc1d19a6d3303684',
				tokenCount: '26250000000000000000000',
				projectId: 17
			}
		];
	});
</script>

<InfoSpaceBetween>
	<div slot="left">
		<p><small><Trans>Distribute reserved tokens</Trans></small></p>
		{#each events as e}
			{#if e.splitProjectId}
				<span>Project {e.splitProjectId}</span>
			{:else}
				<span>
					{getTruncatedAddress(e.beneficiary)}
				</span>
			{/if}
		{/each}
		{#if event.beneficiaryTokenCount}
			{getTruncatedAddress(event.beneficiary)}
		{/if}
	</div>
	<div slot="right">
		<p class="timestamp">
			{event.timestamp && formatHistoricalDate(event.timestamp * 1000)}
			<EtherscanLink value={event.txHash} type="tx" />
		</p>
		{#each events as e}
			<span>
				{formatWad(e.tokenCount)}
				<!-- <ETHAmount amount={e.amount} precision={4} /> -->
			</span>
		{/each}
		{#if event.beneficiaryTokenCount}
			<span>
				{formatWad(event.beneficiaryTokenCount)}
				<!-- <ETHAmount amount={event.distributedAmount} precision={4} /> -->
			</span>
		{/if}
	</div>
</InfoSpaceBetween>

<style>
	div[slot='left'],
	div[slot='right'] {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
	}
</style>

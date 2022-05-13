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
		<div class="beneficiaries">
			{#each events as e}
				{#if e.splitProjectId}
					<p>Project {e.splitProjectId}</p>
				{:else}
					<p>
						{getTruncatedAddress(e.beneficiary)}
					</p>
				{/if}
			{/each}
			{#if event.beneficiaryTokenCount}
				{getTruncatedAddress(event.beneficiary)}
			{/if}
		</div>
	</div>
	<div slot="right">
		<p class="timestamp">
			{event.timestamp && formatHistoricalDate(event.timestamp * 1000)}
			<EtherscanLink value={event.txHash} type="tx" />
		</p>
		<p class="timestamp">called by {getTruncatedAddress(event.caller)}</p>
		{#each events as e}
			<p>
				{formatWad(e.tokenCount)}
			</p>
		{/each}
		{#if event.beneficiaryTokenCount}
			<p>
				{formatWad(event.beneficiaryTokenCount)}
			</p>
		{/if}
	</div>
</InfoSpaceBetween>

<style>
	div[slot='right'] {
		align-items: end;
		display: flex;
		flex-direction: column;
	}

	.beneficiaries {
		/* This is to account for the extra Distributed by line */
		margin-top: 11px;
	}
</style>

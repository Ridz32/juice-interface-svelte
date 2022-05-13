<script lang="ts">
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import ETHAmount from '$lib/components/ETHAmount.svelte';
	import { formatHistoricalDate } from '$utils/formatDate';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';
	import EtherscanLink from '$lib/components/EtherscanLink.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import type { DistributePayoutsEvent } from '$models/subgraph-entities/v2/distribute-payouts-event';
	import { querySubgraph } from '$utils/graph';
	import { onMount } from 'svelte';

	export let event: Partial<DistributePayoutsEvent>;

	let events = [];

    // TODO come back here after feedback from Peel.
	async function loadData() {
		events = await querySubgraph({
			entity: 'distributeToPayoutSplitEvent',
			keys: ['id', 'timestamp', 'txHash', 'amount', 'beneficiary', 'splitProjectId'],
			orderDirection: 'desc',
			orderBy: 'amount',
			where: event?.id
				? {
						key: 'distributePayoutsEvent',
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
				id: '2-17-0xd9e9046f56adbaea501df993577148d2b259fb1f219eb43826a92b848662f931-37',
				timestamp: 1652133874,
				txHash: '0xd9e9046f56adbaea501df993577148d2b259fb1f219eb43826a92b848662f931',
				amount: '204878048780487804',
				beneficiary: '0x7a9ee64f2cd9c215bd0f46ef2a11b4d0dd60a890',
				splitProjectId: 0
			}
		];
	});
</script>

<InfoSpaceBetween>
	<div slot="left">
		<p><small><Trans>Distribute funds</Trans></small></p>
		{#each events as e}
			{#if e.splitProjectId}
				<span>Project {e.splitProjectId}</span>
			{:else}
				<span>
					{getTruncatedAddress(e.beneficiary)}
				</span>
			{/if}
		{/each}
		{#if event.distributedAmount}
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
				<ETHAmount amount={e.amount} precision={4} />
			</span>
		{/each}
		{#if event.distributedAmount}
			<span>
				<ETHAmount amount={event.distributedAmount} precision={4} />
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

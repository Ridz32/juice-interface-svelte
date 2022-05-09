<script>
	import { formatReservedRate } from '$utils/v2/math';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from './InfoSpaceBetween.svelte';
	import PopInfo from './PopInfo.svelte';
	import SimpleSplits from './SimpleSplits.svelte';
	import { getTotalSplitsPercentage } from '$utils/v2/distributions';

	export let fundingCycleMetadata;
	export let reservedTokensSplits;
	export let isCreatePreview = false;

	$: totalSplitPercentageTokenSplits = getTotalSplitsPercentage(reservedTokensSplits);
</script>

<InfoSpaceBetween>
	<div slot="left">
		<div class="available">
			<p>0</p>
			<PopInfo
				message="The funds available to distribution for this funding cycle (before the 2.5% JBX fee is subtracted). This number won't roll over to the next funding cycle, so funds should be distributed before this funding cycle ends."
				><small class="upper">Tokens reserved</small></PopInfo
			>
		</div>
	</div>
	<div slot="right"><button disabled={true}>Distribute tokens</button></div>
</InfoSpaceBetween>
<h4>
	<PopInfo message="Available funds are distributed according to the payouts below."
		>Reserved tokens <span>({formatReservedRate(fundingCycleMetadata.reservedRate)}%)</span
		></PopInfo
	>
</h4>
{#each reservedTokensSplits as split}
	<SimpleSplits {split} />
{/each}
<!-- TODO check if currentAccount is projectOwner -->
<InfoSpaceBetween>
	<p slot="left">Project owner {isCreatePreview ? '(you)' : ''} <Icon name="crown" />:</p>
	<p slot="right">{100 - totalSplitPercentageTokenSplits}%</p>
</InfoSpaceBetween>

<style>
	/* TODO these styles are a mess */
	button {
		background: transparent;
		border: 1px solid var(--stroke-disabled);
		color: var(--text-disabled);
	}
	div[slot='left'] {
		display: flex;
		flex-direction: column;
		font-weight: 500;
	}

	p[slot='left'],
	p[slot='right'] {
		color: var(--text-primary);
		font-weight: 400;
	}
	h4 {
		margin-right: 5px;
		margin-bottom: 5px;
		color: var(--text-header);
	}

	p {
		margin: 0;
		color: var(--text-secondary);
	}

	span {
		margin-left: 10px;
		color: var(--text-primary);
	}
	.available {
		display: flex;
	}
	.upper {
		text-transform: uppercase;
		font-weight: 300;
	}
	.available p {
		margin-right: 5px;
		color: var(--text-secondary);
	}
</style>

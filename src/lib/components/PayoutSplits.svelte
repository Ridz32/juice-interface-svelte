<script lang="ts">
	import { BigNumber } from '@ethersproject/bignumber';
	import { getTotalSplitsPercentage } from '$utils/v2/distributions';
	import ETH from '$lib/components/Ethereum.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import PopInfo from '$lib/components/PopInfo.svelte';
	import { MAX_DISTRIBUTION_LIMIT } from '$utils/v2/math';
	import { Currency, DistributionLimitType } from '$constants';
	import Money from './Money.svelte';
	import SimpleSplits from './SimpleSplits.svelte';
	import type { Split } from '$models/v2/splits';

	export let currency: Currency;
	export let distributionLimit: BigNumber;
	export let payoutSplits: Split[];

	let distributionLimitType: DistributionLimitType;
	let totalSplitPercentagePayoutSplits: number;

	function getDistributionLimitType(distributionLimit) {
		if (distributionLimit.eq(0)) {
			return DistributionLimitType.None;
		}
		if (distributionLimit.eq(MAX_DISTRIBUTION_LIMIT)) {
			return DistributionLimitType.Infinite;
		}
		return DistributionLimitType.Specific;
	}

	function getOwnerAmountPayoutSplits(summedSplitsPercent: number) {
		const remainingPercent = 100 - summedSplitsPercent;
		return distributionLimit.mul(remainingPercent).div(100);
	}

	$: {
		distributionLimitType = getDistributionLimitType(distributionLimit);
		totalSplitPercentagePayoutSplits = getTotalSplitsPercentage(payoutSplits);
	}
</script>

<InfoSpaceBetween>
	<div slot="left" class="distribution-splits">
		<div class="available">
			<p><Money {currency} /></p>
			<PopInfo
				message="The funds available to distribution for this funding cycle (before the 2.5% JBX fee is subtracted). This number won't roll over to the next funding cycle, so funds should be distributed before this funding cycle ends."
				><small class="upper">available</small></PopInfo
			>
		</div>
		{#if distributionLimitType === DistributionLimitType.Infinite}
			<p><small><ETH />0/NO LIMIT distributed</small></p>
		{:else if distributionLimitType === DistributionLimitType.Specific}
			<p>
				<small><Money {currency} amount={BigNumber.from(0)} />/{distributionLimit} </small>
			</p>
		{:else}
			<p><small><ETH />0 distributed</small></p>
		{/if}
		<p><small><ETH />0 <Icon name="crown" /> owner balance</small></p>
	</div>
	<div slot="right"><button disabled={true}>Distribute funds</button></div>
</InfoSpaceBetween>
<h4>
	<PopInfo message="Available funds are distributed according to the payouts below."
		>Distribution splits</PopInfo
	>
</h4>
{#if payoutSplits.length === 0}
	<InfoSpaceBetween>
		<p slot="left">Project owner (you) <Icon name="crown" />:</p>
		<p slot="right">
			{#if distributionLimitType !== DistributionLimitType.Infinite}
				100%
				{#if distributionLimitType === DistributionLimitType.Specific}
					(<Money {currency} amount={distributionLimit} />)
				{/if}
			{/if}
		</p>
	</InfoSpaceBetween>
{/if}
{#each payoutSplits as split}
	<SimpleSplits {split} {distributionLimitType} {distributionLimit} {currency} />
{/each}
{#if payoutSplits.length}
	<InfoSpaceBetween>
		<p slot="left">Project owner (you) <Icon name="crown" />:</p>
		<p slot="right">
			{100 - totalSplitPercentagePayoutSplits}%
			{#if distributionLimitType === DistributionLimitType.Specific}
				(<Money {currency} amount={getOwnerAmountPayoutSplits(totalSplitPercentagePayoutSplits)} />)
			{/if}
		</p>
	</InfoSpaceBetween>
{/if}

<style>
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

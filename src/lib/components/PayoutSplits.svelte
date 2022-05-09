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
	import { getEthBalance } from '$data/eth';
	import { onMount } from 'svelte';

	export let currency: Currency = Currency.ETH;
	export let distributionLimit: BigNumber = BigNumber.from(0);
	export let payoutSplits: Split[];
	// TODO: remove this when create has correct formatted amounts
	export let isCreatePreview: boolean = false;

	export let balanceInDistributionLimitCurrency: BigNumber | undefined = undefined;
	export let usedDistributionLimit: BigNumber | undefined = undefined;
	export let projectOwnerAddress: Address | undefined = undefined;

	let distributionLimitType: DistributionLimitType;
	let totalSplitPercentagePayoutSplits: number;
	let distributableAmount = BigNumber.from(0);
	let ownerBalance = BigNumber.from(0);

	if (usedDistributionLimit) {
		const untapped = distributionLimit.sub(usedDistributionLimit);
		distributableAmount = balanceInDistributionLimitCurrency?.gt(untapped)
			? untapped
			: balanceInDistributionLimitCurrency;
	}

	if (projectOwnerAddress) {
		getEthBalance(projectOwnerAddress).then((balance) => {
			ownerBalance = balance;
		});
		console.log(ownerBalance, 'ownerBalance');
	}

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
			<p><Money {currency} amount={distributableAmount} /></p>
			<PopInfo
				message="The funds available to distribution for this funding cycle (before the 2.5% JBX fee is subtracted). This number won't roll over to the next funding cycle, so funds should be distributed before this funding cycle ends."
				><small class="upper">available</small></PopInfo
			>
		</div>
		{#if distributionLimitType === DistributionLimitType.Infinite}
			<p><small><ETH />0/NO LIMIT distributed</small></p>
		{:else if distributionLimitType === DistributionLimitType.Specific}
			<p>
				<small
					><Money {currency} amount={BigNumber.from(0)} formatWad={!isCreatePreview} />/<Money
						{currency}
						amount={distributionLimit}
						formatWad={!isCreatePreview}
					/>
				</small>
			</p>
		{:else}
			<p><small><Money amount={usedDistributionLimit} /> distributed</small></p>
		{/if}
		{#if projectOwnerAddress}
			{#await getEthBalance(projectOwnerAddress)}
				<Icon name="loadng" spin />
			{:then amount}
				<p><small><Money {amount} /> <Icon name="crown" /> owner balance</small></p>
			{/await}
		{:else}
			<p><small><Money amount={ownerBalance} /> <Icon name="crown" /> owner balance</small></p>
		{/if}
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
					(<Money {currency} amount={distributionLimit} formatWad={!isCreatePreview} />)
				{/if}
			{/if}
		</p>
	</InfoSpaceBetween>
{/if}
{#each payoutSplits as split}
	<SimpleSplits
		{split}
		{distributionLimitType}
		{distributionLimit}
		{currency}
		formatWad={!isCreatePreview}
	/>
{/each}
{#if payoutSplits.length}
	<InfoSpaceBetween>
		<p slot="left">Project owner (you) <Icon name="crown" />:</p>
		<p slot="right">
			{100 - totalSplitPercentagePayoutSplits}%
			{#if distributionLimitType === DistributionLimitType.Specific}
				(<Money
					{currency}
					formatWad={!isCreatePreview}
					amount={getOwnerAmountPayoutSplits(totalSplitPercentagePayoutSplits)}
				/>)
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

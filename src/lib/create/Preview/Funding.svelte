<script lang="ts">
	import { BigNumber } from '@ethersproject/bignumber';
	import { DEFAULT_ISSUANCE_RATE } from '$utils/v2/math';
	import { parseEther } from '@ethersproject/units';
	import CollapsibleSection from '../CollapsibleSection.svelte';
	import ETH from '../Ethereum.svelte';
	import { formattedNum } from '$utils/formatNumber';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SimpleSplits from '$lib/components/SimpleSplits.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import PopInfo from '$lib/components/PopInfo.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { formatDate } from '$utils/formatDate';
	import { detailedTimeUntil, detailedTimeString } from '$utils/formatTime';
	import {
		formatDiscountRate,
		formatRedemptionRate,
		formatReservedRate,
		MAX_DISTRIBUTION_LIMIT,
		weightedAmount
	} from '$utils/v2/math';
	import { FUNDING_CYCLE_WARNING_TEXT } from '$constants/fundingWarningText';
	import Money from '$lib/components/Money.svelte';
	import {
		currentDistributionLimitCurrencyType as currency,
		currentDistributionLimitCurrencyType,
		currentDistributionLimitType,
		distributionLimitData,
		fundingCycle,
		fundingCycleMetadata,
		payoutSplits,
		reservedTokensSplits
	} from '../stores';
	import { Currency, DistributionLimitType } from '$constants';
	import { getTotalSplitsPercentage } from '$utils/v2/distributions';
	import { getBallotStrategyByAddress } from '$constants/v2/ballotStrategies/getBallotStrategiesByAddress';
	import FundingCycleDetails from './FundingCycleDetails.svelte';

	export let fundingCycleNumber: BigNumber;
	export let fundingCycleStartTime: BigNumber;
	export let fundingCycleDurationSeconds: BigNumber;
	export let fundingCycleRiskCount: number;
	export let fundingCycleRiskProperties: any;
	export let isFundingCycleRecurring: boolean;
	export let isPreviewMode: boolean;

	$: totalSplitPercentageTokenSplits = getTotalSplitsPercentage($reservedTokensSplits);
</script>

<div class="title yellow">
	<PopInfo
		message="Tokens are distributed to anyone who pays this project. If the project has set a funding target, tokens can be redeemed for a portion of the project's overflow whether or not they have been claimed yet."
	>
		<h4>Tokens</h4>
	</PopInfo>
</div>
<p>Total supply: <span>0 tokens</span></p>

<div class="title yellow">
	<PopInfo
		message="A project's lifetime is defined in funding cycles. If a funding target is set, the project can withdraw no more than the target for the duration of the cycle."
		><h4>Funding cycle</h4></PopInfo
	>
</div>
<p class="sub-header">CURRENT</p>
<HeavyBorderBox>
	<FundingCycleDetails />
</HeavyBorderBox>
<HeavyBorderBox>
	<InfoSpaceBetween>
		<div slot="left" class="distribution-splits">
			<div class="available">
				<p><Money currency={$currency} /></p>
				<PopInfo
					message="The funds available to distribution for this funding cycle (before the 2.5% JBX fee is subtracted). This number won't roll over to the next funding cycle, so funds should be distributed before this funding cycle ends."
					><small class="upper">available</small></PopInfo
				>
			</div>
			{#if $currentDistributionLimitType === DistributionLimitType.Infinite}
				<p><small><ETH />0/NO LIMIT distributed</small></p>
			{:else if $currentDistributionLimitType === DistributionLimitType.Specific}
				<p>
					<small
						><Money currency={Currency.ETH} amount={BigNumber.from(0)} />/<Money
							currency={Currency.ETH}
							amount={$distributionLimitData.distributionLimit}
						/>
					</small>
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
	{#if $payoutSplits.length === 0}
		<InfoSpaceBetween>
			<p slot="left">Project owner (you) <Icon name="crown" />:</p>
			<p slot="right">
				{#if $currentDistributionLimitType !== DistributionLimitType.Infinite}
					100%
					{#if $currentDistributionLimitType === DistributionLimitType.Specific}
						(<Money currency={$currency} amount={$distributionLimitData.distributionLimit} />)
					{/if}
				{/if}
			</p>
		</InfoSpaceBetween>
	{/if}
	{#each $payoutSplits as split}
		<SimpleSplits
			{split}
			distributionLimitType={$currentDistributionLimitType}
			distributionLimit={$distributionLimitData.distributionLimit}
			currency={$currency}
		/>
	{/each}
</HeavyBorderBox>
<HeavyBorderBox>
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
			>Reserved tokens <span>({formatReservedRate($fundingCycleMetadata.reservedRate)}%)</span
			></PopInfo
		>
	</h4>
	{#each $reservedTokensSplits as split}
		<SimpleSplits {split} />
	{/each}
	<InfoSpaceBetween>
		<p slot="left">Project owner (you) <Icon name="crown" />:</p>
		<p slot="right">{100 - totalSplitPercentageTokenSplits}%</p>
	</InfoSpaceBetween></HeavyBorderBox
>

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
	.title {
		display: flex;
		align-items: baseline;
	}

	.title h4 {
		color: var(--text-header);
		font-weight: 600;
	}

	.title:last-of-type {
		margin-top: 20px;
	}
	.yellow {
		color: var(--text-header);
	}
	h4 {
		margin-right: 5px;
		margin-bottom: 5px;
		color: var(--text-header);
	}

	p {
		margin: 0;
		color: rgba(30, 14, 14, 0.33);
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
		color: rgba(0, 0, 0, 0.6);
	}

	.distribution-splits {
		line-height: 1.2;
	}

	.sub-header {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.6);
		margin: 10px 0;
	}
</style>

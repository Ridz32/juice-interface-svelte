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

	export let fundingCycleNumber: BigNumber;
	export let fundingCycleStartTime: BigNumber;
	export let fundingCycleDurationSeconds: BigNumber;
	export let fundingCycleRiskCount: number;
	// export let fundingCycleRiskProperties: any;
	export let isFundingCycleRecurring: boolean;
	export let isPreviewMode: boolean;

	const riskWarningText = FUNDING_CYCLE_WARNING_TEXT();

	function getDurationValue(seconds: BigNumber) {
		if (!seconds.gt(0)) {
			return 'Not set';
		}
		return detailedTimeString({
			timeSeconds: seconds.toNumber()
		});
	}

	function getDistributionValue(distributionLimit: BigNumber) {
		if (!distributionLimit.gt(0)) {
			return 'Zero';
		} else if (distributionLimit.eq(MAX_DISTRIBUTION_LIMIT)) {
			return 'Infinite';
		}
	}

	const reservedRateText = (fundingCycle, fundingCycleMetadata) => {
		// TODO fix the weighting issue, not sure what's wrong
		// Something to do with weight not being a billion
		// Check default weight, 100% reservedRate is correct
		const initialReservedTokensPerEth =
			DEFAULT_ISSUANCE_RATE *
			((parseFloat(formatReservedRate(fundingCycleMetadata.reservedRate)) ?? 0) / 100);
		const initialIssuanceRate = DEFAULT_ISSUANCE_RATE - initialReservedTokensPerEth;
		// const payerRate = formatWad(
		// 	weightedAmount(
		// 		fundingCycle?.weight,
		// 		fundingCycleMetadata?.reservedRate.toNumber(),
		// 		parseEther('1'),
		// 		'payer'
		// 	),
		// 	{
		// 		precision: 0
		// 	}
		// );
		// const reservedRate = formatWad(
		// 	weightedAmount(
		// 		fundingCycle?.weight,
		// 		fundingCycleMetadata?.reservedRate.toNumber(),
		// 		parseEther('1'),
		// 		'reserved'
		// 	),
		// 	{
		// 		precision: 0
		// 	}
		// );
		const withReservedRate = `${formattedNum(initialIssuanceRate)} (+ ${formattedNum(
			initialReservedTokensPerEth
		)} reserved) tokens/ETH`;
		const withoutReservedRate = `${formattedNum(initialIssuanceRate)} tokens/ETH`;
		return fundingCycleMetadata?.reservedRate.gt(0) ? withReservedRate : withoutReservedRate;
	};

	$: durationSet = fundingCycleDurationSeconds.gt(0);

	$: totalSplitPercentageTokenSplits = getTotalSplitsPercentage($reservedTokensSplits);

	// TODO do something with fundingCycleRiskProperties
	$: cycleKeyValues = [
		{
			id: 'distributionLimit',
			label: 'Distribution limit',
			value: getDistributionValue($distributionLimitData.distributionLimit)
		},
		{
			id: 'duration',
			label: 'Duration',
			value: getDurationValue(fundingCycleDurationSeconds),
			issue: !fundingCycleDurationSeconds.gt(0),
			issueText: riskWarningText.duration
		},
		durationSet && {
			id: 'start',
			label: 'Start',
			value: formatDate(fundingCycleStartTime.mul(1000))
		},
		durationSet && {
			id: 'end',
			label: 'End',
			value: formatDate(fundingCycleStartTime.add(fundingCycleDurationSeconds).mul(1000))
		},
		{
			id: 'discountRate',
			label: 'Discount rate',
			value: `${formatDiscountRate($fundingCycle.discountRate)}%`,
			info: 'The ratio of tokens rewarded per payment amount will decrease by this percentage with each new funding cycle. A higher discount rate will incentivize supporters to pay your project earlier than later.'
		},
		{
			id: 'redemptionRate',
			label: 'Redemption rate',
			value: `${formatRedemptionRate($fundingCycleMetadata.redemptionRate)}%`,
			info: 'This rate determines the amount of overflow that each token can be redeemed for at any given time. On a lower bonding curve, redeeming a token increases the value of each remaining token, creating an incentive to hold tokens longer than others. A redemption rate of 100% means all tokens will have equal value regardless of when they are redeemed.'
		},
		{
			id: 'reservedRate',
			label: 'Reserved tokens',
			value: `${formatReservedRate($fundingCycleMetadata.reservedRate)}%`,
			info: 'Whenever someone pays your project, this percentage of tokens will be reserved and the rest will go to the payer. Reserve tokens are reserved for the project owner by default, but can also be allocated to other wallet addresses by the owner. Once tokens are reserved, anyone can "mint" them, which distributes them to their intended receivers.'
		},
		{
			id: 'issuanceRate',
			label: 'Issuance rate',
			value: reservedRateText($fundingCycle, $fundingCycleMetadata),
			info: 'Tokens received per ETH paid to the treasury. This can change over time according to the discount rate and reserved tokens amount of future funding cycles.'
		},
		{
			id: 'payments',
			label: 'Payments',
			value: $fundingCycleMetadata.pausePay ? 'Paused' : 'Enabled'
		},
		{
			id: 'allowMinting',
			label: 'Token minting',
			value: $fundingCycleMetadata.allowMinting ? 'Enabled' : 'Disabled',
			info: 'Token minting allows the project owner to mint project tokens at any time.'
		},
		{
			id: 'configuration',
			label: 'Reconfiguration strategy',
			value: '3-day delay',
			info: 'Rules for determining how funding cycles can be reconfigured.'
		}
	].filter((item) => Boolean(item));

	let rightHeaderText: string | null = null;
	$: {
		if (fundingCycleDurationSeconds.gt(0)) {
			const endTimeSeconds = fundingCycleStartTime.add(fundingCycleDurationSeconds);
			const formattedTimeLeft = !isPreviewMode
				? detailedTimeUntil(endTimeSeconds)
				: detailedTimeUntil(fundingCycleDurationSeconds);

			rightHeaderText = isFundingCycleRecurring
				? `${formattedTimeLeft} until #${fundingCycleNumber.add(1).toString()}`
				: `{formattedTimeLeft} left`;
		}
	}
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
	<CollapsibleSection>
		<div slot="header">
			<h4 class="collapse-header">
				{#if fundingCycleDurationSeconds.gt(0)}
					Cycle #{fundingCycleNumber.toString()}
				{:else}
					Details
				{/if}
				{#if fundingCycleRiskCount > 0}
					<Popover
						message="Some funding cycle properties may indicate risk for
        project contributors."><Icon name="exclamationCircle" /></Popover
					>{fundingCycleRiskCount}
				{/if}
			</h4>
			{#if rightHeaderText}
				{rightHeaderText}
			{/if}
		</div>
		<div class="current-cycle">
			{#each cycleKeyValues as { id, label, value, info, issue, issueText }}
				{#if info}
					<div class="title gap">
						<PopInfo message={info}><p><b>{label}</b></p></PopInfo>:<span>{value}</span>
						{#if issue}
							<span class="yellow">
								<Popover message={issueText}>
									<Icon name="exclamationCircle" />
								</Popover>
							</span>
						{/if}
					</div>
				{:else if id === 'distributionLimit' && !value}
					<p class="gas">
						<b>{label}:</b>
						<Money
							amount={$distributionLimitData.distributionLimit}
							currency={$currentDistributionLimitCurrencyType}
						/>
					</p>
				{:else}
					<p class="gap">
						<b>{label}:</b>
						<span>{value}</span>
						{#if issue}
							<span class="yellow">
								<Popover message={issueText}>
									<Icon name="exclamationCircle" />
								</Popover>
							</span>
						{/if}
					</p>
				{/if}
			{/each}
		</div>
	</CollapsibleSection>
</HeavyBorderBox>
<HeavyBorderBox>
	<InfoSpaceBetween>
		<div slot="left">
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
			<p><small><ETH />0 distributed</small></p>
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

	div[slot='header'] {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		width: 100%;
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
	.collapse-header {
		margin: 0 10px;
	}

	.current-cycle {
		margin: 20px 0;
	}

	.current-cycle p {
		color: rgba(0, 0, 0, 0.6);
	}

	.current-cycle .gap {
		margin: 10px 0px;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.6);
	}

	.current-cycle span {
		font-weight: 300;
	}
	.sub-header {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.6);
		margin: 10px 0;
	}
</style>

<script lang="ts">
	import { BigNumber } from '@ethersproject/bignumber';
	import { parseEther } from '@ethersproject/units';
	import { DEFAULT_ISSUANCE_RATE } from '$utils/v2/math';
	import { Currency } from '$constants';
	// TODO move
	import CollapsibleSection from '$lib/create/CollapsibleSection.svelte';
	import { formattedNum } from '$utils/formatNumber';
	import Icon from '$lib/components/Icon.svelte';
	import PopInfo from '$lib/components/PopInfo.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { formatDate } from '$utils/formatDate';
	import { formatWad } from '$utils/formatNumber';

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
	import { getBallotStrategyByAddress } from '$constants/v2/ballotStrategies/getBallotStrategiesByAddress';
	import {
		getUnsafeV2FundingCycleProperties,
		V2FundingCycleRiskCount
	} from '$utils/v2/fundingCycle';
	import EthAmount from './ETHAmount.svelte';
	import UsdAmount from './USDAmount.svelte';

	const riskWarningText = FUNDING_CYCLE_WARNING_TEXT();
	const isPreviewMode = true;
	const isFundingCycleRecurring = true;

	// TODO have create/Previw/FundingCycleDetails.svelte use this component too
	// I'm merely testing atm to see how close we might be

	export let expanded;
	export let fundingCycle;
	export let fundingCycleMetadata;
	export let distributionLimit;
	export let currentDistributionLimitCurrencyType;

	let fundingCycleRiskProperties: any = {};
	let fundingCycleRiskCount = 0;

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
		const payerRate = formatWad(
			weightedAmount(
				fundingCycle?.weight,
				fundingCycleMetadata?.reservedRate.toNumber(),
				parseEther('1'),
				'payer'
			),
			{
				precision: 0
			}
		);
		const reservedRate = formatWad(
			weightedAmount(
				fundingCycle?.weight,
				fundingCycleMetadata?.reservedRate.toNumber(),
				parseEther('1'),
				'reserved'
			),
			{
				precision: 0
			}
		);
		const withReservedRate = `${formattedNum(payerRate)} (+ ${formattedNum(
			reservedRate
		)} reserved) tokens/ETH`;
		const withoutReservedRate = `${formattedNum(payerRate)} tokens/ETH`;
		return BigNumber.from(fundingCycleMetadata?.reservedRate).gt(0)
			? withReservedRate
			: withoutReservedRate;
	};

	$: {
		fundingCycleRiskProperties = getUnsafeV2FundingCycleProperties(fundingCycle);
		fundingCycleRiskCount = V2FundingCycleRiskCount(fundingCycle);
	}
	$: currentBallotStrategy = getBallotStrategyByAddress(fundingCycle.ballot);
	$: durationSet = fundingCycle.duration.gt(0);
	$: cycleKeyValues = [
		{
			id: 'distributionLimit',
			label: 'DistributionLimit',
			value: getDistributionValue(distributionLimit)
		},
		{
			id: 'duration',
			label: 'Duration',
			value: getDurationValue(fundingCycle.duration),
			issue: fundingCycleRiskProperties.duration,
			issueText: riskWarningText.duration
		},
		durationSet && {
			id: 'start',
			label: 'Start',
			value: formatDate(fundingCycle.start.mul(1000))
		},
		durationSet && {
			id: 'end',
			label: 'End',
			value: formatDate(fundingCycle.start.add(fundingCycle.duration).mul(1000))
		},
		fundingCycle.discountRate && {
			id: 'discountRate',
			label: 'Discount rate',
			value: `${formatDiscountRate(fundingCycle.discountRate)}%`,
			info: 'The ratio of tokens rewarded per payment amount will decrease by this percentage with each new funding cycle. A higher discount rate will incentivize supporters to pay your project earlier than later.'
		},
		fundingCycleMetadata.redemptionRate && {
			id: 'redemptionRate',
			label: 'Redemption rate',
			value: `${formatRedemptionRate(fundingCycleMetadata.redemptionRate)}%`,
			info: 'This rate determines the amount of overflow that each token can be redeemed for at any given time. On a lower bonding curve, redeeming a token increases the value of each remaining token, creating an incentive to hold tokens longer than others. A redemption rate of 100% means all tokens will have equal value regardless of when they are redeemed.'
		},
		fundingCycleMetadata.reservedRate && {
			id: 'reservedRate',
			label: 'Reserved tokens',
			// value: `${formatReservedRate((fundingCycleMetadata.reservedRate)}%`,
			value: `${formatReservedRate(fundingCycleMetadata.reservedRate)}%`,
			info: 'Whenever someone pays your project, this percentage of tokens will be reserved and the rest will go to the payer. Reserve tokens are reserved for the project owner by default, but can also be allocated to other wallet addresses by the owner. Once tokens are reserved, anyone can "mint" them, which distributes them to their intended receivers.',
			issue:
				fundingCycleRiskProperties.metadataReservedRate ||
				fundingCycleRiskProperties.metadataMaxReservedRate,
			issueText: riskWarningText.metadataReservedRate || riskWarningText.metadataMaxReservedRate
		},
		{
			id: 'issuanceRate',
			label: 'Issuance rate',
			value: reservedRateText(fundingCycle, fundingCycleMetadata),
			info: 'Tokens received per ETH paid to the treasury. This can change over time according to the discount rate and reserved tokens amount of future funding cycles.'
		},
		{
			id: 'payments',
			label: 'Payments',
			value: fundingCycleMetadata.pausePay ? 'Paused' : 'Enabled'
		},
		{
			id: 'allowMinting',
			label: 'Token minting',
			value: fundingCycleMetadata.allowMinting ? 'Enabled' : 'Disabled',
			info: 'Token minting allows the project owner to mint project tokens at any time.'
		},
		{
			id: 'configuration',
			label: 'Reconfiguration strategy',
			value: getBallotStrategyByAddress(fundingCycle.ballot).name,
			info: 'Rules for determining how funding cycles can be reconfigured.',
			issue: fundingCycleRiskProperties.ballot,
			issueText: riskWarningText.ballot
		}
	].filter((item) => Boolean(item));

	let rightHeaderText: string | null = null;
	$: {
		if (fundingCycle.duration.gt(0)) {
			const endTimeSeconds = fundingCycle.start.add(fundingCycle.duration);
			const formattedTimeLeft = detailedTimeUntil(endTimeSeconds);

			rightHeaderText = isFundingCycleRecurring
				? `${formattedTimeLeft} until #${fundingCycle.number.add(1).toString()}`
				: `{formattedTimeLeft} left`;
		}
	}
</script>

<CollapsibleSection alignCaret="center" {expanded}>
	<div slot="header">
		<h4 class="collapse-header">
			{#if fundingCycle.duration.gt(0)}
				Cycle #{fundingCycle.number.toString()}
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
					<PopInfo message={info}><p><b>{label}</b></p></PopInfo>:<span class:risk={issue}
						>{value}</span
					>
					{#if issue}
						<span class="risk">
							<Popover message={issueText}>
								<Icon name="exclamationCircle" />
							</Popover>
						</span>
					{/if}
				</div>
			{:else if id === 'distributionLimit' && !value}
				<p class="gap">
					<b>{label}:</b>
					{#if currentDistributionLimitCurrencyType === Currency.ETH}
						<EthAmount amount={distributionLimit} />
					{:else}
						<UsdAmount amount={distributionLimit} />
					{/if}
				</p>
			{:else}
				<p class="gap">
					<b>{label}:</b>
					<span class:risk={issue}>{value}</span>
					{#if issue}
						<span class="risk">
							<Popover message={issueText}>
								<Icon name="exclamationCircle" />
							</Popover>
						</span>
					{/if}
				</p>
			{/if}
		{/each}
		<small class="recon-info">Address: {currentBallotStrategy.address}</small>
		<small class="recon-info">{currentBallotStrategy.description}</small>
	</div>
</CollapsibleSection>

<style>
	div[slot='header'] {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.collapse-header {
		margin: 0 10px;
		color: var(--text-header);
	}

	.current-cycle {
		margin: 20px 0;
	}

	.current-cycle .gap {
		margin: 10px 0px;
		font-weight: 500;
		color: var(--text-secondary);
	}

	.current-cycle span {
		font-weight: 300;
	}

	.title {
		display: flex;
		align-items: baseline;
	}

	span.risk {
		font-weight: 500;
		color: var(--text-warn);
	}

	.recon-info {
		font-weight: 300;
	}

	span {
		margin-left: 10px;
		color: var(--text-primary);
	}

	p {
		margin: 0;
		font-weight: 400;
		color: var(--text-secondary);
	}
</style>

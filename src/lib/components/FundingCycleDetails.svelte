<script lang="ts">
	import { BigNumber } from '@ethersproject/bignumber';
	import { parseEther } from '@ethersproject/units';
	// TODO move
	import CollapsibleSection from '$lib/create/CollapsibleSection.svelte';
	import { formattedNum } from '$utils/formatNumber';
	import Icon from '$lib/components/Icon.svelte';
	import Money from '$lib/components/Money.svelte';
	import PopInfo from '$lib/components/PopInfo.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { formatWad } from '$utils/formatNumber';

	import { detailedTimeUntil } from '$utils/formatTime';
	import {
		MAX_DISTRIBUTION_LIMIT,
		weightedAmount
	} from '$utils/v2/math';
	import { getBallotStrategyByAddress } from '$constants/v2/ballotStrategies/getBallotStrategiesByAddress';
	import {
		getFundingCycleDetails,
		V2FundingCycleRiskCount
	} from '$utils/v2/fundingCycle';
	import Trans from './Trans.svelte';
	import type { V2FundingCycle, V2FundingCycleMetadata } from '$models/v2/fundingCycle';
	import type { Currency } from '$constants';

	const isFundingCycleRecurring = true;

	export let expanded: boolean = true;
	export let fundingCycle: V2FundingCycle;
	export let fundingCycleMetadata: V2FundingCycleMetadata;
	export let distributionLimit: BigNumber;
	export let currentDistributionLimitCurrencyType: Currency;

	function getDistributionValue(distributionLimit: BigNumber) {
		if (!distributionLimit.gt(0)) {
			return 'Zero';
		} else if (distributionLimit.eq(MAX_DISTRIBUTION_LIMIT)) {
			return 'Infinite';
		}
		return null;
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

	$: currency = BigNumber.from(currentDistributionLimitCurrencyType)?.toNumber();
	$: currentBallotStrategy = getBallotStrategyByAddress(fundingCycle.ballot);
	$: cycleKeyValues = getFundingCycleDetails(fundingCycle, fundingCycleMetadata);
	$: distributionLimitValue = getDistributionValue(distributionLimit);
	$: fundingCycleRiskCount = V2FundingCycleRiskCount(fundingCycle);

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
		<div class="gap">
			<b><Trans>Distribution limit</Trans>:</b>
			{#if distributionLimitValue}
				<span>{distributionLimitValue}</span>
			{:else}
				<Money amount={BigNumber.from(distributionLimit)} {currency} />
			{/if}
		</div>
		{#each cycleKeyValues as { label, value, info, issue, issueText }}
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

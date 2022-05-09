<script lang="ts">
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import PayoutSplits from '$lib/components/PayoutSplits.svelte';
	import PopInfo from '$lib/components/PopInfo.svelte';
	import { getTotalSplitsPercentage } from '$utils/v2/distributions';
	import FundingCycleDetails from './FundingCycleDetails.svelte';
	import {
		currentDistributionLimitCurrencyType as currency,
		distributionLimitData,
		fundingCycleMetadata,
		payoutSplits,
		reservedTokensSplits
	} from '../stores';
	import ReservedTokenSplits from '$lib/components/ReservedTokenSplits.svelte';
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
	<PayoutSplits
		currency={$currency}
		payoutSplits={$payoutSplits}
		distributionLimit={$distributionLimitData.distributionLimit}
		isCreatePreview={true}
	/>
</HeavyBorderBox>
<HeavyBorderBox>
	<ReservedTokenSplits
		fundingCycleMetadata={$fundingCycleMetadata}
		reservedTokensSplits={$reservedTokensSplits}
	/>
</HeavyBorderBox>

<style>
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
	.sub-header {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 12px;
		color: var(--text-secondary);
		margin: 10px 0;
	}
</style>

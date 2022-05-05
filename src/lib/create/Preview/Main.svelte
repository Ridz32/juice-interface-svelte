<script lang="ts">
	import type { BigNumber } from '@ethersproject/bignumber';
	import CashMoney from './CashMoney.svelte';
	import Funding from './Funding.svelte';
	import InfoHeader from './InfoHeader.svelte';
	import Pay from './Pay.svelte';

	import { fundingCycle } from '../stores';
	import {
		getUnsafeV2FundingCycleProperties,
		V2FundingCycleRiskCount
	} from '$utils/v2/fundingCycle';

	function getFundingFields(fundingCycle) {
		return {
			fundingCycleNumber: fundingCycle.number,
			fundingCycleStartTime: fundingCycle.start,
			fundingCycleDurationSeconds: fundingCycle.duration,
			fundingCycleRiskCount: V2FundingCycleRiskCount(fundingCycle),
			fundingCycleRiskProperties: getUnsafeV2FundingCycleProperties(fundingCycle),
			isFundingCycleRecurring: true,
			isPreviewMode: true
		};
	}

	let fundingFields: svelte.JSX.IntrinsicAttributes & {
		fundingCycleNumber: BigNumber;
		fundingCycleStartTime: BigNumber;
		fundingCycleDurationSeconds: BigNumber;
		fundingCycleRiskCount: number;
		fundingCycleRiskProperties: any;
		isFundingCycleRecurring: boolean;
		isPreviewMode: boolean;
	};

	$: fundingFields = getFundingFields($fundingCycle);
</script>

<h1 class="title">Preview:</h1>
<InfoHeader />
<CashMoney />
<Pay />
<Funding {...fundingFields} />

<style>
	.title {
		font-size: 18px;
		color: rgba(0, 0, 0, 0.6);
		margin-bottom: 0px;
		font-weight: 400;
	}
</style>

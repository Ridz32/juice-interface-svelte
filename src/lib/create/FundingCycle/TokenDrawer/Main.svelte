<script type="ts">
	import { getContext } from 'svelte';
	import type Store from '$utils/Store';
	import type { V2ProjectContextType } from '$models/project-type';
	import Button from '$lib/components/Button.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import ReservedRate from './ReservedRate.svelte';
	import DiscountRate from './DiscountRate.svelte';
	import RedemptionRate from './RedemptionRate.svelte';
	import { DistributionLimitType } from '$constants';
	import {
		discountRateFrom,
		formatDiscountRate,
		formatRedemptionRate,
		formatReservedRate,
		redemptionRateFrom,
		reservedRateFrom
	} from '$utils/v2/math';
	import InfoBox from '$lib/components/InfoBox.svelte';
	import { getDistributionLimitType } from '$utils/v2/distributions';

	let project = getContext('PROJECT') as Store<V2ProjectContextType>;

	export let close: () => void;

	let discountRate = parseFloat(formatDiscountRate($project.fundingCycle.discountRate));
	let redemptionRate = parseFloat(
		formatRedemptionRate($project.fundingCycleMetadata.redemptionRate)
	);
	let reservedRate = parseFloat(formatReservedRate($project.fundingCycleMetadata.reservedRate));

	let splits = $project.reservedTokensSplits;

	function saveTokenConfiguration() {
		project.update((current) => ({
			...current,
			fundingCycle: {
				...current.fundingCycle,
				discountRate: discountRateFrom(discountRate.toString())
			},
			fundingCycleMetadata: {
				...current.fundingCycleMetadata,
				redemptionRate: redemptionRateFrom(redemptionRate.toString()),
				reservedRate: reservedRateFrom(reservedRate.toString())
			},
			reservedTokensSplits: splits
		}));
		close();
	}

	$: currentDistributionLimitType = getDistributionLimitType($project.distributionLimit);
</script>

<h1>Token</h1>
<InfoBox
	info={`
    By default, the issuance rate for your project's token is
    1,000,000 tokens / 1 ETH. For example, a 1 ETH contribution to
    your project will return 1,000,000 tokens. You can manipulate the
    issuance rate with the following configurations.`}
/>
<br />
<section id="tokenDrawer">
	<HeavyBorderBox>
		<ReservedRate bind:reservedRate bind:splits />
	</HeavyBorderBox>
	<HeavyBorderBox>
		<DiscountRate
			bind:discountRate
			{reservedRate}
			disabled={!$project.fundingCycle.duration.gt(0)}
		/>
	</HeavyBorderBox>
	<HeavyBorderBox>
		<RedemptionRate
			bind:redemptionRate
			disabled={currentDistributionLimitType !== DistributionLimitType.Specific}
		/>
	</HeavyBorderBox>
	<Button on:click={saveTokenConfiguration}>Save token configuration</Button>
</section>

<style>
	:global(#tokenDrawer header) {
		margin-bottom: 1rem;
	}
	h1,
	:global(#tokenDrawer h3) {
		color: var(--text-header);
	}
	:global(#tokenDrawer h3) {
		margin: 0;
	}

	:global(#tokenDrawer h3 span) {
		color: var(--text-tertiary);
	}

	:global(#tokenDrawer p) {
		font-weight: 300;
	}

	:global(#tokenDrawer a) {
		font-weight: 500;
	}
</style>

<script lang="ts">
	import { getContext } from 'svelte';
	import { DistributionLimitType } from '$constants';
	import { getDistributionLimitType, getTotalSplitsPercentage } from '$utils/v2/distributions';
	import type Store from '$utils/Store';
	import ActionModal from '$lib/components/ActionModal.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import Money from '$lib/components/Money.svelte';
	import SimpleSplits from '$lib/components/SimpleSplits.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import type { V2ProjectContextType } from '$models/project-type';
	const project = getContext('PROJECT') as Store<V2ProjectContextType>;

	const totalSplitPercentagePayoutSplits = getTotalSplitsPercentage($project.payoutSplits || []);
	const distributionLimitType = getDistributionLimitType($project.distributionLimit);

	function getOwnerAmountPayoutSplits(summedSplitsPercent: number) {
		const remainingPercent = 100 - summedSplitsPercent;
		return $project.distributionLimit.mul(remainingPercent).div(100);
	}
</script>

<ActionModal title="Distribute funds">
	<!-- TODO total funds break down plus after fee -->
	<InfoSpaceBetween>
		<p slot="left">Total funds:</p>
		<p slot="right">
			<!-- TODO contract reader total funds -->
			<Money currency={$project.distributionLimitCurrency} />
		</p>
	</InfoSpaceBetween>
	<!-- TODO input  -->

	<h4><Trans>Payout recipients</Trans></h4>
	{#each $project.payoutSplits as split}
		<SimpleSplits {split} />
	{/each}
	<InfoSpaceBetween>
		<p slot="left">Project owner <Icon name="crown" />:</p>
		<p slot="right">
			{100 - totalSplitPercentagePayoutSplits}%
			{#if distributionLimitType === DistributionLimitType.Specific}
				(<Money
					currency={$project.distributionLimitCurrency}
					amount={getOwnerAmountPayoutSplits(totalSplitPercentagePayoutSplits)}
					precision={2}
				/>)
			{/if}
		</p>
	</InfoSpaceBetween>
	<p class="info"><Icon name="infoCircle" /> Recipients will receive payouts in ETH.</p>
</ActionModal>

<style>
	h4 {
		color: var(--text-header);
	}

	p.info {
		color: var(--text-secondary);
		font-size: 0.8rem;
	}
</style>

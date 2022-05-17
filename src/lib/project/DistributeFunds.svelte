<script lang="ts">
	import { getContext } from 'svelte';
	import { DistributionLimitType } from '$constants';
	import { BigNumber } from 'ethers';
	import {
		amountFromPercent,
		getDistributionLimitType,
		getTotalSplitsPercentage
	} from '$utils/v2/distributions';
	import type Store from '$utils/Store';
	import ActionModal from '$lib/components/ActionModal.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import Money from '$lib/components/Money.svelte';
	import SimpleSplits from '$lib/components/SimpleSplits.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import type { V2ProjectContextType } from '$models/project-type';
	import Input from '$lib/components/Input.svelte';
	import OwnerCrown from '$lib/components/OwnerCrown.svelte';

	export let close: () => {};
	let amount: number;

	const project = getContext('PROJECT') as Store<V2ProjectContextType>;

	const totalSplitPercentagePayoutSplits = getTotalSplitsPercentage($project.payoutSplits || []);
	const distributionLimitType = getDistributionLimitType($project.distributionLimit);

	export let totalFunds: BigNumber; // as formatted value
	const fee = amountFromPercent({ percent: 2.5, amount: totalFunds.toString() });
	const totalAfterFee = parseFloat(totalFunds.toString()) - fee;

	function getOwnerAmountPayoutSplits(summedSplitsPercent: number) {
		const remainingPercent = 100 - summedSplitsPercent;
		return $project.distributionLimit.mul(remainingPercent).div(100);
	}

	function setMax() {
		console.log('TODO: setMax to available balance');
		amount = totalAfterFee;
	}

	function distributeFunds() {
		console.log('TODO: distributeFunds');
	}
</script>

<ActionModal title="Distribute funds">
	<div class="breakdown">
		<InfoSpaceBetween>
			<p slot="left">Total funds:</p>
			<p slot="right">
				<Money
					currency={$project.distributionLimitCurrency}
					amount={BigNumber.from(totalFunds)}
					formatWad={false}
				/>
			</p>
		</InfoSpaceBetween>
		<InfoSpaceBetween>
			<p slot="left">JBX Fee (2.5%):</p>
			<p slot="right">
				-<Money currency={$project.distributionLimitCurrency} amount={fee} formatWad={false} />
			</p>
		</InfoSpaceBetween>
		<hr />
		<!-- <div class="total"> -->
		<InfoSpaceBetween>
			<p slot="left"><b>Available after fee:</b></p>
			<p slot="right">
				<b>
					<Money
						currency={$project.distributionLimitCurrency}
						amount={totalAfterFee}
						formatWad={false}
					/>
				</b>
			</p>
		</InfoSpaceBetween>
		<!-- </div> -->
	</div>

	<Input type="number" bind:value={amount}>
		<div slot="addon" role="button" on:click={setMax}>MAX</div>
	</Input>

	<h4><Trans>Payout recipients</Trans></h4>
	{#each $project.payoutSplits as split}
		<SimpleSplits {split} />
	{/each}
	<InfoSpaceBetween>
		<p slot="left">Project owner <OwnerCrown />:</p>
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

	<div slot="footer">
		<Button type="secondary" size="md" on:click={close}>Close</Button>
		<Button type="primary" size="md" on:click={distributeFunds}>Distribute funds</Button>
	</div>
</ActionModal>

<style>
	h4 {
		margin-top: 40px;
		color: var(--text-header);
	}

	p.info {
		color: var(--text-secondary);
		font-size: 0.8rem;
	}

	div[slot='addon'] {
		cursor: pointer;
		color: var(--text-action-primary);
		text-align: center;
		background: var(--background-action-secondary);
		border-radius: var(--radius-sm);
	}

	.breakdown {
		margin-bottom: 2rem;
	}
	.breakdown p {
		margin: 0;
		font-weight: 300;
	}

	.breakdown hr {
		border-top: 1px solid var(--stroke-secondary);
	}
</style>

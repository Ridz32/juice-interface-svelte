<script lang="ts">
	import AddSplitModal from './AddSplitModal.svelte';
	import AlertText from '$lib/components/AlertText.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import Input from './FundingCycleInput.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Button from '$lib/components/Button.svelte';
	import CurrencyInput from '$lib/components/CurrencyInput.svelte';
	import DisplaySplit from '$lib/components/Split.svelte';
	import { bind, openModal } from '../Modal.svelte';
	import { BigNumber } from 'ethers';
	import {
		fundingCycle,
		distributionLimitData,
		currentDistributionLimitType,
		currentDistributionLimitCurrencyType,
		payoutSplits
	} from '../stores';
	import { MAX_DISTRIBUTION_LIMIT } from '$utils/v2/math';
	import { Currency, CurrencyValue, DistributionLimitType } from '$constants';
	import { onMount } from 'svelte';
	import type { Split } from '$models/v2/splits';

	export let close: () => void;

	let fundingCyclesActive = false;
	let duration: BigNumber = BigNumber.from(0);
	let distributionLimitType: DistributionLimitType = DistributionLimitType.None;
	let distributionLimit: BigNumber = BigNumber.from(0);
	let distributionLimitCurrency: Currency;
	let splits = payoutSplits.get();

	onMount(() => {
		if ($fundingCycle.duration.gt(0)) {
			duration = $fundingCycle.duration;
			fundingCyclesActive = true;
		}
		distributionLimit = $distributionLimitData.distributionLimit;
		distributionLimitType = $currentDistributionLimitType;
		distributionLimitCurrency = $currentDistributionLimitCurrencyType;
	});

	$: {
		switch (distributionLimitType) {
			case DistributionLimitType.None:
				distributionLimit = BigNumber.from(0);
				break;
			case DistributionLimitType.Infinite:
				distributionLimit = BigNumber.from(MAX_DISTRIBUTION_LIMIT);
				break;
			// Handled by the eventHandler setValue
			case DistributionLimitType.Specific:
				break;
		}
	}

	function setValue(e: any) {
		distributionLimit = e.detail.value;
	}

	function addSplit(split: Split) {
		splits = [...splits, split];
	}

	function removeSplit(split: Split) {
		splits = splits.filter(
			(s) => s.beneficiary !== split.beneficiary || s.projectId !== split.projectId
		);
	}

	function saveFundingConfig() {
		fundingCycle.update((fc) => ({
			...fc,
			duration
		}));
		distributionLimitData.update((dl) => ({
			...dl,
			distributionLimit,
			distributionLimitCurrency: CurrencyValue[distributionLimitCurrency]
		}));
		payoutSplits.set(splits);
		close();
	}
</script>

<h1>Funding</h1>
<HeavyBorderBox>
	<Toggle bind:checked={fundingCyclesActive}><h3>Funding cycles</h3></Toggle>
	<p>Set the length of your funding cycles, which can enable:</p>
	<ol>
		<li>
			<b>Recurring funding cycles</b> (for example, distribute $30,000 from your project's treasury every
			14 days).
		</li>
		<li>
			A <b>discount rate</b> to automatically reduce the issuance rate of your project's token (tokens/ETH)
			each new funding cycle.
		</li>
		<li>
			Restrict how the owner can reconfigure upcoming funding cycles to mitigate abuse of power. <a
				href="/">Learn more</a
			>.
		</li>
	</ol>
	{#if fundingCyclesActive}
		<Input bind:value={duration} />
	{/if}
</HeavyBorderBox>
<HeavyBorderBox>
	<h3>Distribution limit</h3>
	<p>Set the amount of funds you'd like to distribute from your treasury each funding cycle.</p>

	<p>
		Any treasury funds within the distribution limit can be paid out to destinations that you can
		define as <b>splits</b>.
		<a href="/">Learn more</a> about payout splits.
	</p>
	<p>
		Any treasury funds in excess of the distribution limit is called <b>overflow.</b>
		Overflow can be claimed by your project's token holders by redeeming their tokens.
		<a href="/">Learn more</a> about overflow.
	</p>
	<label for="distributionLimit">Distribution limit</label>
	<select id="distributionLimit" bind:value={distributionLimitType}>
		<option value={DistributionLimitType.None}>Zero, no funds can be distributed</option>
		<!-- TODO no limit needs payout splits -->
		<option value={DistributionLimitType.Infinite}>No limit (infinite)</option>
		<!-- TODO specific target and payout splits-->
		<option value={DistributionLimitType.Specific}>Specific target</option>
	</select>
	<br />
	{#if distributionLimitType === DistributionLimitType.Specific}
		<CurrencyInput on:setValue={setValue} bind:currency={distributionLimitCurrency} />
	{:else if distributionLimitType === DistributionLimitType.None}
		<AlertText
			>With a distribution limit of Zero, no funds can be distributed by the project. All funds
			belong to token holders as overflow.</AlertText
		>
	{:else}
		<AlertText>
			With an infinite distribution limit, all funds can be distributed by the project. The project
			will have no overflow, meaning token holders won't be able to redeem their tokens for treasury
			funds.</AlertText
		>
	{/if}
</HeavyBorderBox>
<HeavyBorderBox>
	<h3>Payout splits</h3>
	{#if distributionLimitType === DistributionLimitType.None}
		<AlertText>Payout splits can't be scheduled when the distribution limit is Zero.</AlertText>
	{:else}
		<!-- TODO href for jb treasury -->
		<AlertText
			>Distributing payouts to addresses outside the Juicebox contracts incurs a 2.5% JBX membership
			fee. The ETH from the fee will go to the <a href="">JuiceboxDAO treasury</a>, and the
			resulting JBX will go to the project's owner.</AlertText
		>
		{#each splits as split}
			<DisplaySplit {split} onRemove={removeSplit} />
		{/each}
		<Button
			onClick={() => {
				openModal(
					bind(AddSplitModal, {
						currency: distributionLimitCurrency,
						distributionLimit,
						onFinish: addSplit,
						splits
					})
				);
			}}>Add a split</Button
		>
	{/if}
</HeavyBorderBox>
<Button onClick={saveFundingConfig}>Save funding configuration</Button>

<style>
	h1,
	h3 {
		color: var(--text-header);
	}
	h1 {
		font-weight: 500;
	}

	h3 {
		font-weight: 400;
		margin: 0;
		margin-bottom: 10px;
	}

	p {
		font-weight: 300;
	}

	label {
		font-weight: 400;
	}

	/* TODO think of nice input/select abstraction, this css has been repeated in FundingCycleInput and FormField */
	select {
		display: block;
		background: transparent;
		border: 1px solid #d9d9d9;
		border-radius: 2px;
		color: rgba(0, 0, 0, 0.85);
		font-variant: tabular-nums;
		font-family: inherit;
		font-size: 14px;
		font-weight: 300;
		width: 150px;
		padding: 4px 11px;
		margin-top: 10px;
		line-height: 1.5715;
		transition: all 0.3s;
		width: 100%;
	}
</style>

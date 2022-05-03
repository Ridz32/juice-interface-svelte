<script lang="ts">
	import AddSplitModal from './AddSplitModal.svelte';
	import AlertText from '$lib/components/AlertText.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import Input from './FundingCycleInput.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Button from '$lib/components/Button.svelte';
	import { openModal } from '../Modal.svelte';
	import { BigNumber } from 'ethers';
	import { fundingCycle } from '../stores';
	import { MAX_DISTRIBUTION_LIMIT } from '$utils/v2/math';

	enum DistributionLimit {
		None = 0,
		Specific = 1,
		Infinite = 2
	}

	let fundingCyclesActive = false;
	let duration: BigNumber;
	let distributionLimit: BigNumber = BigNumber.from(0);
	let distributionLimitCurrency: string;

	$: isSpecificLimit = ![BigNumber.from(0), BigNumber.from(MAX_DISTRIBUTION_LIMIT)].includes(
		distributionLimit
	);

	function saveFundingConfig() {
		// TODO close modal
		fundingCycle.update((fc) => ({
			...fc,
			duration
		}));
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
	<select id="distributionLimit" bind:value={distributionLimit}>
		<option value={DistributionLimit.None}>Zero, no funds can be distributed</option>
		<!-- TODO no limit needs payout splits -->
		<option value={BigNumber.from(MAX_DISTRIBUTION_LIMIT)}>No limit (infinite)</option>
		<!-- TODO specific target needs an extra input and payout splits-->
		<option value={BigNumber.from(1)}>Specific target</option>
	</select>
	{#if isSpecificLimit}
		<!-- TODO component from PayButton, bind distributionLimit and ...Currency -->
		<input bind:value={distributionLimitCurrency} />
	{/if}
	<AlertText
		>With a distribution limit of Zero, no funds can be distributed by the project. All funds belong
		to token holders as overflow.</AlertText
	>
</HeavyBorderBox>
<HeavyBorderBox>
	<h3>Payout splits</h3>
	<AlertText>Payout splits can't be scheduled when the distribution limit is Zero.</AlertText>
	<Button
		onClick={() => {
			openModal(AddSplitModal);
		}}>Add a split</Button
	>
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
		font-weight: 300;
		margin: 0;
	}

	label {
		font-weight: 400;
	}

	/* TODO think of nice input/select abstraction, this css has been repeated in FundingCycleInput and FormField */
	input,
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

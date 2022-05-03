<script lang="ts">
	import { t } from '@lingui/macro';
	import AddSplitModal from './AddSplitModal.svelte';
	import AlertText from '$lib/components/AlertText.svelte';
	import HeavyBorderBox from './HeavyBorderBox.svelte';
	import Input from './FundingCycleInput.svelte';
	import Toggle from './Toggle.svelte';
	import Button from '$lib/components/Button.svelte';
	import { openModal } from './Modal.svelte';

	let fundingCycles = false;
	function toggleFundingCycles(e: Event) {
		fundingCycles = !fundingCycles;
	}
</script>

<!-- TODO ignore whole file for missing t. why is this so f-ing hard?! -->
<!-- svelte-ignore missing-declaration -->

<h1>
	<!-- svelte-ignore missing-declaration -->
	{t`Funding`}
</h1>
<HeavyBorderBox>
	<Toggle checked={fundingCycles} onClick={toggleFundingCycles}
		><h3>
			<!-- svelte-ignore missing-declaration -->
			{t`Funding cycles`}
		</h3></Toggle
	>
	<p>
		<!-- svelte-ignore missing-declaration -->
		{t`Set the length of your funding cycles, which can enable`}:
	</p>
	<ol>
		<li>
			<!-- svelte-ignore missing-declaration -->
			{t`<b>Recurring funding cycles</b> (for example, distribute $30,000 from your
      project's treasury every 14 days).`}
		</li>
		<li>
			<!-- svelte-ignore missing-declaration -->
			{t`A <b>discount rate</b> to automatically reduce the issuance rate of your project's
      token (tokens/ETH) each new funding cycle.`}
		</li>
		<li>
			<!-- svelte-ignore missing-declaration -->
			{t`Restrict how the owner can reconfigure upcoming funding cycles to mitigate
      abuse of power. <a href="/">Learn more</a>.`}
		</li>
	</ol>
	{#if fundingCycles}
		<Input />
	{/if}
</HeavyBorderBox>
<HeavyBorderBox>
	<h3>
		<!-- svelte-ignore missing-declaration -->
		{t`Distribution limit`}
	</h3>
	<p>
		<!-- svelte-ignore missing-declaration -->
		{t`
    Set the amount of funds you'd like to distribute from your treasury each
    funding cycle.`}
	</p>

	<p>
		<!-- svelte-ignore missing-declaration -->
		{t`Any treasury funds within the distribution limit can be paid out to
    destinations that you can define as <b>splits</b>.
    <a href="/">Learn more</a> about payout splits.`}
	</p>
	<p>
		<!-- svelte-ignore missing-declaration -->
		{t`Any treasury funds in excess of the distribution limit is called <b
      >overflow.</b
    >
    Overflow can be claimed by your project's token holders by redeeming their tokens.
    <a href="/">Learn more</a> about overflow.`}
	</p>
	<label for="distributionLimit">Distribution limit</label>
	<select>
		<option>
			<!-- svelte-ignore missing-declaration -->
			{t`Zero, no funds can be distributed`}</option
		>
		<!-- TODO no limit needs payout splits -->
		<option>
			<!-- svelte-ignore missing-declaration -->
			{t`No limit (infinite)`}</option
		>
		<!-- TODO specific target needs an extra input and payout splits-->
		<option>
			<!-- svelte-ignore missing-declaration -->
			{t`Specific target`}</option
		>
	</select>
	<AlertText>
		<!-- svelte-ignore missing-declaration -->
		{t`With a distribution limit of Zero, no funds can be distributed by the
    project. All funds belong to token holders as overflow.`}</AlertText
	>
</HeavyBorderBox>
<HeavyBorderBox>
	<h3>
		<!-- svelte-ignore missing-declaration -->
		{t`Payout splits`}
	</h3>
	<AlertText>
		<!-- svelte-ignore missing-declaration -->
		{t`Payout splits can't be scheduled when the distribution limit is Zero`}.</AlertText
	>
	<Button onClick={() => openModal(AddSplitModal)}>Add a split</Button>
</HeavyBorderBox>

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

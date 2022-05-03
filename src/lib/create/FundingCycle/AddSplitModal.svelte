<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import FormField from '../FormField.svelte';
	import PopInfo from '../PopInfo.svelte';
	import Icon from "$lib/components/Icon.svelte";
	import Select from '$lib/components/Select.svelte';
	import { closeModal } from '../Modal.svelte';
	import { payoutSplits } from '../stores';
	import Range from '$lib/components/Range.svelte';
	import CurrencyInput from '$lib/components/CurrencyInput.svelte';
	import type { Split } from '$models/v2/splits';
	import type { Currency } from '$constants';
	import type { BigNumber } from 'ethers';
	import { MAX_DISTRIBUTION_LIMIT } from '$utils/v2/math';
	import {
		getDistributionPercentFromAmount,
		getDistributionAmountFromPercentAfterFee
	} from '$utils/v2/distributions';
	import Popover from '../Popover.svelte';

	const feePercentage = '2.5';

	// The distribution limit dictates if there is a paymount amount field
	export let distributionLimit: BigNumber | null = null;
	export let currency: Currency | null = null;
	let showAmount = distributionLimit && !distributionLimit.eq(MAX_DISTRIBUTION_LIMIT);

	// Wether an already existing split is being edited
	export let split: Split | null = null;
	// TODO edit existing split
	// let editingExistingSplit = !!split;
	// onMount(() => {
	// })

	let address: Address;
	let percent = 0;
	let amount = 0;
	let amountAfterFee;
	let rangeValue = [percent];

	function setAmountAfterFee(percent) {
		amountAfterFee = getDistributionAmountFromPercentAfterFee({
			percent,
			distributionLimit: distributionLimit.toString(),
			feePercentage
		});
	}

	function setRangeValue(e: { detail: { value: BigNumber } }) {
		const value = e.detail.value;
		percent = getDistributionPercentFromAmount({
			amount: value.toNumber(),
			distributionLimit: distributionLimit.toString()
		});
		rangeValue[0] = percent;
	}

	$: {
		if (showAmount) {
			// Set the input value when the range value changes
			amount = (rangeValue[0] / 100) * distributionLimit.toNumber();
			setAmountAfterFee(rangeValue[0]);
		}
	}

	const today = new Date().toISOString().split('T')[0];

	const field = {
		id: 'address',
		label: 'Address',
		placeholder: 'juicebox.eth / 0x0000000000000000000000000000000000000000'
	};
</script>

<h3>Add a split</h3>
<section>
	<Select>
		<option>Wallet address</option>
		<option>Juicebox project</option>
	</Select>
	<FormField {field} bind:value={address} />
	{#if showAmount}
		<div class="gap">
			<label for="payoutAmount" class="small-gap"> Payout amount </label>
			<CurrencyInput on:setValue={setRangeValue} disabled {currency} inputValue={amount} />

			{#if amount}
				<Popover
					placement="right"
					message="Payouts to Ethereum addresses incur a 2.5% fee. Your project will receive JBX in return at the current issuance rate."
				>
					{amountAfterFee}{' '}
					after {feePercentage}% JBX membership fee
					<Icon name="questionCircle" />
				</Popover>
			{/if}
		</div>
	{/if}
	<div class="gap">
		<label for="percent">
			<PopInfo message="Percentage this payee will receive of all funds raised."
				>Percent of distribution limit</PopInfo
			>
		</label>
		<!-- NOTE the range reacts to a too large amount by setting it to the max value -->
		<Range bind:values={rangeValue} />
	</div>
	<label for="lock-date" class="small-gap">Lock until</label>
	<input type="date" id="lock-date" min={today} placeholder="mm/dd/yyyy" />
	<p>
		If locked, this split can't be edited or removed until the lock expires or the funding cycle is
		reconfigured.
	</p>
</section>
<div class="actions">
	<Button onClick={closeModal} size="md" type="secondary">Cancel</Button>
	<Button size="md">Add split</Button>
</div>

<style>
	h3 {
		margin: 0;
	}
	section {
		margin: 40px 0;
	}
	label {
		display: block;
		font-weight: 400;
	}
	input[type='date'] {
		background: var(--background-l0);
		border: 1px solid #d9d9d9;
		height: 30px;
		color: rgba(0, 0, 0, 0.6);
		padding-inline-start: 10px;
	}
	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
		margin-top: 20px;
	}
	.gap {
		margin: 20px 0;
	}
	.small-gap {
		margin: 10px 0;
	}
</style>

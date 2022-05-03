<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import FormField from '../FormField.svelte';
	import PopInfo from '../PopInfo.svelte';
	import Select from '$lib/components/Select.svelte';
	import { closeModal } from '../Modal.svelte';
	import { payoutSplits } from '../stores';
	import Range from '$lib/components/Range.svelte';
	import CurrencyInput from '$lib/components/CurrencyInput.svelte';
	import type { Split } from '$models/v2/splits';
	import type { Currency } from '$constants';
	import type { BigNumber } from 'ethers';
	import { MAX_DISTRIBUTION_LIMIT } from '$utils/v2/math';

	export let distributionLimit: BigNumber | null = null;
	export let currency: Currency | null = null;
	export let split: Split | null = null;

	let showAmount = distributionLimit && !distributionLimit.eq(MAX_DISTRIBUTION_LIMIT);
	let editingExistingSplit = !!split;

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
	<FormField {field} dataStore={payoutSplits} />
	{#if showAmount}
		<div class="gap">
			<label for="payoutAmount" class="small-gap"> Payout amount </label>
			<CurrencyInput disabled {currency} />
		</div>
	{/if}
	<div class="gap">
		<label for="percent">
			<PopInfo message="Percentage this payee will receive of all funds raised."
				>Percent of distribution limit</PopInfo
			>
		</label>
		<Range />
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

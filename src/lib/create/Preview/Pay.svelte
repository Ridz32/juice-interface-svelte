<script lang="ts">
	import { projectMetadata } from '../stores';
	import Button from '../../components/Button.svelte';
	import ETH from '../Ethereum.svelte';
	import CurrencyInput, { Currency } from '$lib/components/CurrencyInput.svelte';
	import { BigNumber } from 'ethers';

	let currency = Currency.ETH;
	let receiveText = 'Receive 1,000,000 tokens/1 ETH';
	let amount: BigNumber = BigNumber.from('0');

	// TODO dollar value should be calculated from ETH conversion rate
	$: receiveText =
		currency === Currency.ETH ? 'Receive 1,000,000 tokens/1 ETH' : 'Receive 357 tokens/1 USD';

	function setValue(value) {
		amount = value;
	}
</script>

<div class="wrapper">
	<div class="stacked expand">
		<CurrencyInput bind:currency on:setValue={setValue} />
		<small>{receiveText}</small>
	</div>
	<div class="stacked">
		<Button size="md" onClick={console.log}>{$projectMetadata.payButton}</Button>
		{#if currency === Currency.USD}
			<small>Paid as <ETH />0.00071584</small>
		{/if}
	</div>
</div>

<style>
	.wrapper {
		margin: 40px 0;
		display: flex;
	}

	.expand {
		flex: 1;
		margin-right: 10px;
	}

	.stacked {
		display: flex;
		flex-direction: column;
	}

	.stacked:last-of-type {
		text-align: center;
	}
</style>

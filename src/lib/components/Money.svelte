<script lang="ts">
	import { BigNumber } from 'ethers';
	import { Currency } from '$constants';
	import { betweenZeroAndOne } from '$utils/bigNumbers';
	import Ethereum from '$lib/components/Ethereum.svelte';
	import USD from '$lib/components/USD.svelte';
	import EthAmount from './ETHAmount.svelte';
	import UsdAmount from './USDAmount.svelte';

	export let currency: Currency = Currency.ETH;
	export let amount = BigNumber.from('0');
	export let formatWad = true;
	export let precision = 0;
</script>

{#if formatWad}
	{#if currency === Currency.ETH}
		<EthAmount {amount} {precision} />
	{:else}
		<UsdAmount {amount} {precision} />
	{/if}
{:else if currency === Currency.ETH}
	<Ethereum />{amount}
{:else}
	<USD />{amount}
{/if}

<script lang="ts">
	import { BigNumber } from 'ethers';
	import { Currency } from '$constants';
	import { formatWad, parseWad } from '$utils/formatNumber';
	import { betweenZeroAndOne } from '$utils/bigNumbers';
	import Ethereum from '$lib/components/Ethereum.svelte';
	import USD from '$lib/components/USD.svelte';

	export let currency: Currency = Currency.ETH;
	export let amount = BigNumber.from('0');

	// TODO combine ETHAmount with this component
	// export let precision = 0;
	// export let padEnd = false;

	// const isBetweenZeroAndOne =
	// 	(BigNumber.isBigNumber(amount) && betweenZeroAndOne(amount)) ||
	// 	betweenZeroAndOne(parseWad(amount));

	// const precisionAdjusted = isBetweenZeroAndOne ? 4 : precision;

	// const formattedAmount = formatWad(amount, {
	// 	precision: precisionAdjusted,
	// 	padEnd
	// });
</script>

{#if currency === Currency.ETH}
	<Ethereum />{amount}
{:else}
	<USD />{amount}
{/if}

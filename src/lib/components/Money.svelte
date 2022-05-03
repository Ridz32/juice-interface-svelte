<script lang="ts">
	import { BigNumber } from "ethers";
    import { Currency } from '$constants';
	import Ethereum from '$lib/create/Ethereum.svelte';
	import USD from '$lib/components/USD.svelte';

	export let currency: Currency;
	export let amount = BigNumber.from('0');
</script>

{#if currency === Currency.ETH}
	<Ethereum />{amount}
{:else}
	<USD />{amount}
{/if}

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import type { BigNumber } from 'ethers';
	import { Currency, CurrencyName } from '$constants';
	import { formatWad } from '$utils/formatNumber';
	import { parseWad } from '$utils/formatNumber';
	import Icon from '$lib/components/Icon.svelte';

	export let currency: Currency = Currency.ETH;
	export let inputValue = 0;
	export let initialValue: BigNumber | undefined = undefined;
	export let disabled = false;

	const dispatch = createEventDispatcher();

	onMount(() => {
		if (initialValue) {
			inputValue = parseFloat(formatWad(initialValue));
		}
	});

	/**
	 * onBlur dispatches "setValue" event which handles BigNumber conversion
	 * bind to value directly to get the input without conversion
	 * @param e: Event
	 * @dispatch setValue
	 */
	function onBlur(e: Event) {
		const target = e.target as HTMLInputElement;
		const value = parseWad(target.value);
		dispatch('setValue', { value });
	}

	function onClick() {
		currency = currency === Currency.ETH ? Currency.USD : Currency.ETH;
		dispatch('switchCurrency', { currency });
	}
</script>

<div class="input-container">
	<input placeholder="0" type="number" bind:value={inputValue} on:blur={onBlur} />
	<div role="button" class="currency" class:disabled on:click={!disabled && onClick}>
		{CurrencyName[currency]}
		{#if !disabled}
			<Icon name="caret" direction="e" />
		{/if}
	</div>
</div>

<style>
	.input-container {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;

		box-sizing: border-box;
		border: 1px solid #d9d9d9;
		border-radius: 2px;
		width: 100%;
	}
	/* TODO we want the parent to be focused when input is... */
	input:focus-visible {
		outline: none;
	}

	/* TODO input asbtraction, this is semi borrowed from FormField */
	input {
		flex-grow: 1;
		margin: 0;
		font-variant: tabular-nums;
		font-family: inherit;
		font-size: 14px;
		font-weight: 300;
		list-style: none;
		-webkit-font-feature-settings: 'tnum', 'tnum';
		font-feature-settings: 'tnum', 'tnum';
		position: relative;
		display: inline-block;
		min-width: 0;
		padding: 4px 11px;
		color: var(--text-primary);
		line-height: 1.5715;
		background-color: transparent;
		border: none;
		transition: all 0.3s;
	}

	.input-container:focus-visible {
		border: 1px solid #3f51b5;
	}

	.currency {
		cursor: pointer;
		color: rgb(24, 180, 199);
		background: rgba(50, 200, 219, 0.267);
		font-size: 12px;
		white-space: nowrap;
		padding: 1px 6px;
		margin-left: 0px;
		margin-right: 2px;
		border-radius: 1px;

		display: flex;
		align-items: center;
	}

	.disabled {
		cursor: not-allowed;
		color: rgba(0, 0, 0, 0.25);
		background: rgba(0, 0, 0, 0.03);
	}

	:global(.currency svg) {
		margin-left: 4px;
		transform: translate(0, 1px) rotate(90deg) !important;
		width: 0.6em;
		height: 0.6em;
	}
</style>

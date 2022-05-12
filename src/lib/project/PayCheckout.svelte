<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { closeModal } from '$lib/components/Modal.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Trans from '$lib/components/Trans.svelte';

	export let amountString: string = '';
	export let tokenSymbol: string = '';
	export let payDisclosure: string = '';

	let memo;
	let checked = false;
	// TODO get the correct data
	let buyerTokens = 300;
	let reservedTokens = 100;
</script>

<main>
	<h3><Trans>Pay {tokenSymbol}</Trans></h3>
	<p>
		<Trans
			>Paying <b>{tokenSymbol}</b> is not an investment — it's a way to support the project. Any value
			or utility of the tokens you receive is determined by Baguette.</Trans
		>
	</p>

	{#if payDisclosure}
		<h4>Notice from {tokenSymbol}:</h4>
		<p>{payDisclosure}</p>
	{/if}
	<table>
		<tbody
			><tr
				><th colspan="1"><span>Pay amount</span></th><td colspan="1"><span>{amountString}</span></td
				></tr
			><tr
				><th colspan="1"><span>Tokens for you</span></th><td colspan="1"
					><span
						><div>{buyerTokens}</div>
						<div /></span
					></td
				></tr
			><tr
				><th colspan="1"><span>{tokenSymbol} reserved</span></th><td colspan="1"
					><span>{reservedTokens}</span></td
				></tr
			></tbody
		>
	</table>
	<label for="memo">Memo</label>
	<Input bind:value={memo} placeholder="(Optioal) Add a memo to this payment on-chain" />

	<div class="beneficiary">
		<p>Custom token beneficiary</p>
		<Toggle bind:checked />
	</div>
	<small>Mint tokes to a custom address.</small>

	<div class="ant-modal-footer" style="margin-top: 1rem">
		<button type="button" class="ant-btn" on:click={closeModal}>
			<span>Close</span>
		</button>
		<button type="button" class="ant-btn ant-btn-primary"><span>Pay</span></button>
	</div>
</main>

<style>
	h3,
	h4 {
		color: var(--text-header);
	}
	main {
		padding: 1rem;
		max-width: 750px;
	}
	table {
		width: 100%;
		margin: 20px 0px;
	}
	tbody,
	tr {
		border: 1px solid var(--stroke-primary);
	}
	th {
		font-weight: 600;
		text-align: left;
		color: var(--text-secondary);
		border-right: 1px solid var(--stroke-primary);
	}
	td {
		font-weight: 300;
		text-align: right;
	}

	th,
	td {
		padding: 12px 18px;
	}

	p {
		margin: 0;
	}
	.beneficiary {
		display: flex;
		margin-top: 1rem;
		/* font-weight: 300; */
	}
	.beneficiary p {
		margin-right: 10px;
	}
</style>

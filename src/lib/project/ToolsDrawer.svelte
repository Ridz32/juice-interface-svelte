<script lang="ts">
	import CurrencyInput from '$lib/components/CurrencyInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

    export let balance = 0;
	export let token = '';

	let transferTokenAmount = 0;
	let transferTokenTo: Address;

    // NOTE this will be a big number due to CurrencyInput
	let addToBalanceAmount = 0;

	function transfer() {
		console.log(transferTokenAmount);
		console.log(transferTokenTo);
	}

    function addToBalance() {
        console.log(addToBalanceAmount);
    }
</script>

<section>
	<h1>Tools</h1>

	<div class="item">
		<h3>Transfer unclaimed {token}</h3>
		<p>Your balance: {balance}</p>

		<label for="amount">Amount</label>
		<div class="input">
			<Input bind:value={transferTokenAmount} type="number" placeholder="Amount" />
		</div>

		<label for="to">To</label>
		<div class="input">
			<Input
				bind:value={transferTokenTo}
				type="text"
				placeholder="juicebox.eth / 0x0000000000000000000000000000000000000000"
			/>
		</div>

		<Button type="primary" size="md" on:click={transfer}>Transfer {token}</Button>
	</div>

	<div class="item">
		<h3>Add to balance</h3>
		<p>Add funds tho this project's balance without minting tokens.</p>

		<label for="payAmount">Pay amount</label>
		<div class="input">
			<CurrencyInput
				on:setValue={(value) => {
					addToBalanceAmount = value.detail.value;
				}}
				disabled
			/>
		</div>
        <Button type="primary" size="md" on:click={addToBalance}>Add to balance</Button>
	</div>
</section>

<style>
	section {
		padding: 40px 20px;
	}
	h1,
	h3 {
		color: var(--text-header);
	}

	h1 {
		font-size: 2rem;
	}

	p {
		font-weight: 300;
	}

	.input {
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.item {
		margin-top: 40px;
		padding-bottom: 40px;
	}

	.item:first-of-type {
		border-bottom: 1px solid var(--stroke-tertiary);
	}
</style>

<script lang="ts">
	import Button from '$lib/utils/Button.svelte';

	let inputValue = 0;
	let isStaking = true;
</script>

<div class="section-wrapper">
	<div class="section">
		<h3>
			Bridge ONEOF FOUNDATION DAO TOKENS
		</h3>
		<h4>ETH to XTZ / XTZ to ETH</h4>
		<p>
			The OneOf Foundation DAO Token total supply includes both Ethereum ERC721 and Tezos FA2.1. Use the OneOf bridge to transfer your tokens to where you DeFi. OneOf Incorporated's loyal customers and followers includes the music industries savvy collectors.
		</p>
		<div>
			{#if isStaking}
				<div class="field">
					<label for="amount">
						Stake Amount
						<span class="max-amount" on:click={() => (inputValue = 20.0)}> (max 20.00) </span>
					</label>
					<input type="number" placeholder="0.00" bind:value={inputValue} min={0} step={0.01} />
				</div>
				<div class="actions">
					<Button opacity={0.5} on:click={() => (isStaking = false)}>Unstake</Button>
					<Button widthFull>Stake</Button>
				</div>
			{:else}
				<div class="field">
					<label for="amount"
						>Unstake Amount <span class="max-amount" on:click={() => (inputValue = 10.0)}
							>(max 10.00)</span
						></label
					>
					<input type="number" placeholder="0.00" bind:value={inputValue} min={0} step={0.01} />
				</div>
				<div class="actions">
					<Button opacity={0.5} on:click={() => (isStaking = true)}>Stake</Button>
					<Button widthFull>Unstake</Button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.section-wrapper {
		min-height: calc(60vh - (70px - 2rem) - 150px);
	}
	.section {
		max-width: 500px;
		margin: 0px auto 50px auto;
		text-align: center;
		padding: 1rem;
	}
	.section > div {
		margin: 2.5rem;
        opacity: 0.2;
        pointer-events: none;
	}
	.field {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		text-align: left;
	}
	label {
		color: #ccc;
		margin-bottom: 0.25rem;
	}
	input[type='number'] {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 0.5rem;
		font-size: 16px;
		color: #202020;
		text-align: right;
		-moz-appearance: textfield;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input:focus-within {
		outline-color: #202020;
	}
	.actions {
		display: flex;
		margin: 1rem;
		gap: 0.4rem;
	}
	.max-amount {
		cursor: pointer;
		color: #999;
		user-select: none;
	}
</style>

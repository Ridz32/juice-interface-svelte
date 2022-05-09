<script>
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import { closeModal } from '$lib/components/Modal.svelte';

	let isDeploying = false;
	// TODO contract reader for deploying a new payable address
	function deploy() {
		isDeploying = true;
		console.info('Not implemented yet');
		setTimeout(() => {
			isDeploying = false;
			closeModal();
		}, 2000);
	}
</script>

<div class="content">
	<h2>Create payable address</h2>
	<p><Trans>Create an Ethereum address that can be used to pay your project directly.</Trans></p>
	<p>
		<Trans
			>Tokens minted from payments to this address will belong to the payer. However, if someone
			pays the project from a non-custodial entity like the Coinbase app, tokens can't be issued to
			their personal wallets and will be lost.</Trans
		>
	</p>
</div>
<div class="buttons">
	<Button type="secondary" size="md" on:click={closeModal}>Close</Button>
	<Button type="primary" size="md" disabled={isDeploying} on:click={deploy}
		>Deploy project payer contract
		{#if isDeploying}
			<Icon name="loading" spin />
		{/if}
	</Button>
</div>

<style>
	p {
		font-weight: 300;
	}

	h2 {
		color: var(--text-header);
	}

	.buttons {
		float: right;
	}
</style>

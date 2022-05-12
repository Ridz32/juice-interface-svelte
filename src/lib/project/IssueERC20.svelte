<script lang="ts">
	/**
	 * This is the modal that helps create a ERC-20 token.
	 */

	import ActionModal from '$lib/components/ActionModal.svelte';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	export let close: () => void;

	function issueToken() {
		console.log('🛠 TODO implement me issue erc20 token');
	}
</script>

<ActionModal title="Issue an ERC-20 token">
	<p>
		Issue an ERC-20 to be used as this project's token. Once issued, anyone can claim their existing
		token balance in the new token.
	</p>
	<Input type="text" placeholder="Project token" label="Token name" />
	<Input type="text" placeholder="PRJ" label="Token symbol" />
	<div slot="footer">
		<Button on:click={close} type="secondary" size="md">Close</Button>
		<Button on:click={issueToken} size="md">Issue token</Button>
	</div>
</ActionModal>

<style>
    p {
        font-weight: 300;
    }
</style>
<script>
	import Button from '$lib/components/Button.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { fundingCycleMetadata } from './stores';

	let pausePay = $fundingCycleMetadata.pausePay;
	let allowMinting = $fundingCycleMetadata.allowMinting;
    export let close;

	function onSaveRules() {
		fundingCycleMetadata.update((fcm) => ({
			...fcm,
			pausePay,
			allowMinting
		}));
		close();
	}
</script>

<h1>Rules</h1>
<HeavyBorderBox>
	<div class="option">
		<Toggle id="pausePayments" bind:checked={pausePay}>Pause payments</Toggle>
		<p>When enabled, your project cannot receive direct payments.</p>
	</div>
	<div class="option">
		<Toggle id="allowMinting" bind:checked={allowMinting}>Allow token minting</Toggle>
		<p>When enabled, the project owner can manually mint any amount of tokens to any address.</p>
		{#if allowMinting}
			<p class="info">
				<Icon name="exclamationCircle" /> Enabling token minting will appear risky to contributors. Only
				enable this when necessary.
			</p>
		{/if}
	</div>
</HeavyBorderBox>
<HeavyBorderBox>
	<h4>Reconfiguration</h4>
</HeavyBorderBox>
<Button onClick={onSaveRules}>Save rules</Button>

<style>
	h1 {
		color: var(--text-header);
	}

	p {
		font-weight: 300;
		color: var(--text-secondary);
	}

	.info {
		color: var(--text-warn);
	}

	.option {
		margin-bottom: 20px;
	}
</style>

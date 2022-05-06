<script context="module">
	import { ballotStrategies, DEFAULT_BALLOT_STRATEGY } from '$constants/v2/ballotStrategies';
	const strategies = ballotStrategies();
</script>

<script>
	import { constants } from 'ethers';
	import Button from '$lib/components/Button.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Input from '$lib/components/Input.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import ReconBox from './FundingCycle/TokenDrawer/ReconBox.svelte';
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
	{#each strategies as strategy}
		<ReconBox>
			<h3 slot="header">{strategy.name}</h3>
			<p slot="body">{strategy.description}</p>
			<small slot="address">Contract address: {strategy.address}</small>
		</ReconBox>
	{/each}
	<ReconBox>
		<!-- TODO Rinkeby should be from signerNetwork -->
		<h3 slot="header">Custom strategy</h3>
		<div slot="body">
			<div class="input">
				<Input placeholder={constants.AddressZero} />
			</div>
			<p>
				The address of any smart contract deployed on Rinkeby that implements
				<ExternalLink
					href="https://github.com/jbx-protocol/juice-contracts-v1/blob/main/contracts/FundingCycles.sol"
				>
					this interface.
				</ExternalLink>
			</p>
		</div>
	</ReconBox>
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

	[slot='body'],
	[slot='body'] p {
		color: var(--text-primary);
	}

	[slot='address'] {
		color: var(--text-tertiary);
		font-weight: 300;
	}

	.input {
		width: 400px;
	}
</style>

<script context="module">
	import { ballotStrategies, DEFAULT_BALLOT_STRATEGY } from '$constants/v2/ballotStrategies';
	const strategies = ballotStrategies();
</script>

<script lang="ts">
	import { constants } from 'ethers';
	import { isAddress } from 'ethers/lib/utils';
	import type { BallotStrategy } from '$constants/v2/ballotStrategies';
	import AlertText from '$lib/components/AlertText.svelte';
	import Button from '$lib/components/Button.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Input from '$lib/components/Input.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import ReconBox from '$lib/components/ReconBox.svelte';
	import { fundingCycle, fundingCycleMetadata } from './stores';

	export let close: () => void;

	let pausePay = $fundingCycleMetadata.pausePay;
	let allowMinting = $fundingCycleMetadata.allowMinting;

	let selected = DEFAULT_BALLOT_STRATEGY;
	let customBallotAddress: Address | undefined;
	let disabled = false;

	function selectBallotStrategy(strategy: BallotStrategy) {
		selected = strategy;
        if (strategy.name !== 'custom') {
            disabled = false;
        }
	}

    function validate(address: Address) {
		return isAddress(address) && address !== constants.AddressZero;
    }

	function onSaveRules() {
		fundingCycleMetadata.update((fcm) => ({
			...fcm,
			pausePay,
			allowMinting
		}));
		fundingCycle.update((fc) => ({
			...fc,
			ballot: selected.address
		}));
		close();
	}

	$: {
		if (selected.name === 'custom') {
			selected.address = customBallotAddress;
			disabled = !validate(customBallotAddress);
		}
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
	{#if selected.name === 'No strategy'}
		<AlertText
			>Using a reconfiguration strategy is recommended. Projects with no strategy will appear risky
			to contributors.</AlertText
		>
	{/if}
	{#each strategies as strategy}
		<ReconBox
			selected={strategy.name === selected.name}
			on:click={() => selectBallotStrategy(strategy)}
		>
			<h3 slot="header">{strategy.name}</h3>
			<p slot="body">{strategy.description}</p>
			<small slot="address">Contract address: {strategy.address}</small>
		</ReconBox>
	{/each}
	<ReconBox
		selected={'custom' === selected.name}
		on:click={() => selectBallotStrategy({ name: 'custom', address: '' })}
	>
		<!-- TODO Rinkeby should be from signerNetwork -->
		<h3 slot="header">Custom strategy</h3>
		<div slot="body">
			<div class="input">
				<Input placeholder={constants.AddressZero} bind:value={customBallotAddress} />
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
<Button {disabled} onClick={onSaveRules}>Save rules</Button>

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

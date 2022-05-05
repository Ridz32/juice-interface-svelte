<script lang="ts">
	import type { BigNumberish } from 'ethers';
	import { DEFAULT_ISSUANCE_RATE } from '$utils/v2/math';
	import { formattedNum } from '$utils/formatNumber';
	import Toggle from '$lib/components/Toggle.svelte';
	import InfoBox from '../../InfoBox.svelte';
	import Range from '$lib/components/Range.svelte';

	export let reservedRate: number = 0;
	export let checked: boolean = reservedRate > 0;

	let rangeValue: number[] = [reservedRate];

	// Reserved tokens received by project per ETH
	let initialReservedTokensPerEth: BigNumberish;
	// Tokens received by contributor's per ETH
	let initialIssuanceRate: BigNumberish;
	$: {
		reservedRate = rangeValue[0];
		initialReservedTokensPerEth = DEFAULT_ISSUANCE_RATE * ((reservedRate ?? 0) / 100);
		initialIssuanceRate = DEFAULT_ISSUANCE_RATE - initialReservedTokensPerEth;
	}
</script>

<header>
	<Toggle id="reserved" bind:checked
		><h3>
			Reserved rate
			{#if !reservedRate}
				<span>(0%)</span>
			{/if}
		</h3></Toggle
	>
</header>
{#if checked}
	<Range bind:values={rangeValue} />
{/if}
<InfoBox
	info={`Initial issuance rate will be ${formattedNum(
		initialIssuanceRate
	)} tokens / ETH for contributors. ${formattedNum(
		initialReservedTokensPerEth
	)} tokens / ETH will be reserved by the project.`}
/>
<br />
<p>
	Whenever someone pays your project, this percentage of tokens will be reserved and the rest will
	go to the payer.
</p>
<p>
	By default, these tokens are reserved for the project owner, but you can also allocate portions to
	other wallet addresses.
</p>

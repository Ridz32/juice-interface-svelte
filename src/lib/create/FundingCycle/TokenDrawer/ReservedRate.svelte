<script lang="ts">
	import { DEFAULT_ISSUANCE_RATE } from '$utils/v2/math';
	import { formattedNum } from '$utils/formatNumber';
	import Toggle from '$lib/components/Toggle.svelte';
	import InfoBox from '../../InfoBox.svelte';
	import Range from '$lib/components/Range.svelte';

	export let checked: boolean = false;

    export let value = 0;

    // Reserved tokens received by project per ETH
	const initialReservedTokensPerEth = DEFAULT_ISSUANCE_RATE * ((value ?? 0) / 100);
	// Tokens received by contributor's per ETH
	const initialIssuanceRate = DEFAULT_ISSUANCE_RATE - initialReservedTokensPerEth;
</script>

<header>
	<Toggle id="reserved" bind:checked><h3>Reserved rate</h3></Toggle>
</header>
{#if checked}
	<Range />
{/if}
<InfoBox
	info={`Initial issuance rate will be ${formattedNum(
		initialIssuanceRate
	)} tokens / ETH for contributors. 0 tokens / ETH will be reserved by the project.`}
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

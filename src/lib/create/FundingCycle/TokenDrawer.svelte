<script type="ts">
	import { DEFAULT_ISSUANCE_RATE } from '$utils/v2/math';
	// import {
	// 	FUNDING_CYCLE_WARNING_TEXT,
	// 	RESERVED_RATE_WARNING_THRESHOLD_PERCENT
	// } from '$constants/fundingWarningText';
	import AlertText from '$lib/components/AlertText.svelte';
	import Button from '$lib/components/Button.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import Range from '$lib/components/Range.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { formattedNum } from '$utils/formatNumber';

	import InfoBox from '../InfoBox.svelte';

	// TODO this component will be reused in the edit phase, but we're trying to get create ready first
	export let value = 0;

	let reservedRateActive: boolean;
	let discountRateActive: boolean;
	let redemptionRateActive: boolean;

	// Reserved tokens received by project per ETH
	const initialReservedTokensPerEth = DEFAULT_ISSUANCE_RATE * ((value ?? 0) / 100);

	// Tokens received by contributor's per ETH
	const initialIssuanceRate = DEFAULT_ISSUANCE_RATE - initialReservedTokensPerEth;
</script>

<h1>Token</h1>
<InfoBox
	info={`
    By default, the issuance rate for your project's token is
    1,000,000 tokens / 1 ETH. For example, a 1 ETH contribution to
    your project will return 1,000,000 tokens. You can manipulate the
    issuance rate with the following configurations.`}
/>
<br />
<HeavyBorderBox>
	<header>
		<Toggle bind:checked={reservedRateActive}><h3>Reserved rate</h3></Toggle>
	</header>
	{#if reservedRateActive}
		<!-- <input class="gap" type="range" id="percent" min="0" max="100" /> -->
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
		By default, these tokens are reserved for the project owner, but you can also allocate portions
		to other wallet addresses.
	</p>
</HeavyBorderBox>
<HeavyBorderBox>
	<header>
		<Toggle bind:checked={discountRateActive}><h3>Discount rate</h3></Toggle>
	</header>
	<AlertText>Disabled when your project's funding cycle has no duration.</AlertText>
	<p>
		The issuance rate will decrease by this percentage with each new funding cycle. A higher
		discount rate will incentivize supporters to pay your project earlier than later.
	</p>
</HeavyBorderBox>
<HeavyBorderBox>
	<header>
		<Toggle bind:checked={redemptionRateActive}><h3>Redemption rate</h3></Toggle>
	</header>
	<!-- TODO The bonding curve -->
	<p>
		This rate determines the amount of overflow that each token can be redeemed for at any given
		time. On a lower redemption rate, redeeming a token increases the value of each remaining token,
		creating an incentive to hold tokens longer than others. The default redemption rate of 100%
		means all tokens will have equal value regardless of when they are redeemed. Learn more in this
		<a href="https://youtu.be/dxqc3yMqi5M">short video.</a>
	</p>
</HeavyBorderBox>
<Button>Save token configuration</Button>

<style>
	header {
		margin-bottom: 1rem;
	}
	h1,
	h3 {
		color: var(--text-header);
	}

	h3 {
		margin: 0;
	}

	p {
		font-weight: 300;
	}

	a {
		font-weight: 500;
	}
</style>

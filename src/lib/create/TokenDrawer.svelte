<script type="ts">
	import InfoBox from './InfoBox.svelte';
	import HeavyBorderBox from './HeavyBorderBox.svelte';
	import Toggle from './Toggle.svelte';
	import AlertText from '$lib/components/AlertText.svelte';
	import Button from '$lib/components/Button.svelte';

	let reservedRateActive: boolean;
	let discountRateActive: boolean;
	let redemptionRateActive: boolean;
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
	<InfoBox
		info={`Initial issuance rate will be 1,000,000 tokens / ETH for contributors. 0 tokens / ETH will be reserved by the project.`}
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

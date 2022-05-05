<script type="ts">
	import Button from '$lib/components/Button.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import ReservedRate from './ReservedRate.svelte';
	import DiscountRate from './DiscountRate.svelte';
	import RedemptionRate from './RedemptionRate.svelte';
	import InfoBox from '../../InfoBox.svelte';

	let discountRate: number;

    function saveTokenConfiguration() {
        console.log("Discount rate in % ", discountRate);
    }
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
<section id="tokenDrawer">
	<HeavyBorderBox>
		<ReservedRate />
	</HeavyBorderBox>
	<HeavyBorderBox>
		<DiscountRate bind:discountRate />
	</HeavyBorderBox>
	<HeavyBorderBox>
		<RedemptionRate />
	</HeavyBorderBox>
	<Button onClick={saveTokenConfiguration}>Save token configuration</Button>
</section>

<style>
	:global(#tokenDrawer header) {
		margin-bottom: 1rem;
	}
	h1,
	:global(#tokenDrawer h3) {
		color: var(--text-header);
	}

	:global(#tokenDrawer h3) {
		margin: 0;
	}

	:global(#tokenDrawer p) {
		font-weight: 300;
	}

	:global(#tokenDrawer a) {
		font-weight: 500;
	}
</style>

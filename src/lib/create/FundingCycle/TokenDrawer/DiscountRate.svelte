<script lang="ts">
	import { BigNumber, type BigNumberish } from 'ethers';
	import AlertText from '$lib/components/AlertText.svelte';
	import Range from '$lib/components/Range.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';

	import { DEFAULT_ISSUANCE_RATE, formatReservedRate, MAX_RESERVED_RATE } from '$utils/v2/math';

	import { formattedNum } from '$utils/formatNumber';

	/**
	 * TODO
	 * [ ] get reserved rate from store
	 */

    export let disabled = false;
	export let discountRate: number;
	export let reservedRate = BigNumber.from(0);
	export let checked = discountRate > 0;

	let rangeValue: number[] = [discountRate];

	let secondIssuanceRate: BigNumberish;
	let thirdIssuanceRate: BigNumberish;

	const reservedRatePercent = parseFloat(formatReservedRate(BigNumber.from(reservedRate)));

	// Tokens received by contributor's per ETH
	const initialIssuanceRate = DEFAULT_ISSUANCE_RATE - reservedRatePercent * MAX_RESERVED_RATE;

	$: {
		discountRate = rangeValue[0];

		const discountRateDecimal = rangeValue[0] * 0.01;
		secondIssuanceRate = initialIssuanceRate - initialIssuanceRate * discountRateDecimal;
		thirdIssuanceRate = secondIssuanceRate - secondIssuanceRate * discountRateDecimal;
	}
</script>

<header>
	<Toggle id="discount" {disabled} bind:checked
		><h3>
			Discount rate
			{#if !disabled && !discountRate}
				<span>({disabled ? '' : '0%'})</span>
			{/if}
		</h3></Toggle
	>
</header>
{#if disabled}
	<AlertText>Disabled when your project's funding cycle has no duration.</AlertText>
{/if}
{#if checked}
	<Range bind:values={rangeValue} max={20} step={0.1} />
{/if}
<p>
	The issuance rate will decrease by this percentage with each new funding cycle. A higher discount
	rate will incentivize supporters to pay your project earlier than later.
</p>
{#if rangeValue[0] > 0}
	<InfoBox>
		The issuance rate of your second funding cycle will be {formattedNum(secondIssuanceRate)} tokens
		/ ETH, {formattedNum(thirdIssuanceRate)}
		tokens / ETH for your third funding cycle, and so on.
	</InfoBox>
{/if}

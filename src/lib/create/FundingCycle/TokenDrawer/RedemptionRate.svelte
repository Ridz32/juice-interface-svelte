<script lang="ts">
	import AlertText from '$lib/components/AlertText.svelte';
	import Range from '$lib/components/Range.svelte';
	import Toggle from '$lib/components/Toggle.svelte';

	export let disabled = false;
	export let redemptionRate: number = 100;
	export let checked = redemptionRate !== 100;

	let rangeValue = [redemptionRate];

	$: {
		redemptionRate = rangeValue[0];
	}
</script>

<header>
	<Toggle id="redemption" bind:checked {disabled}
		><h3>
			Redemption rate {#if !disabled && redemptionRate === 100}
				<span>({disabled ? '' : '100%'})</span>
			{/if}
		</h3></Toggle
	>
</header>
{#if disabled}
	<AlertText>
		Disabled when your project's distribution limit isn't <b>Specifc</b>
	</AlertText>
{/if}
{#if checked}
	<Range bind:values={rangeValue} step={0.5} />
{/if}
<!-- TODO The bonding curve -->
<p>
	This rate determines the amount of overflow that each token can be redeemed for at any given time.
	On a lower redemption rate, redeeming a token increases the value of each remaining token,
	creating an incentive to hold tokens longer than others. The default redemption rate of 100% means
	all tokens will have equal value regardless of when they are redeemed. Learn more in this
	<a href="https://youtu.be/dxqc3yMqi5M">short video.</a>
</p>

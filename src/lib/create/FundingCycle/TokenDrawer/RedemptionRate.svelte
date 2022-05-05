<script lang="ts">
	import AlertText from '$lib/components/AlertText.svelte';
	import Toggle from '$lib/components/Toggle.svelte';

	export let checked = false;
	export let disabled = false;

    export let redemptionRate;
</script>

<header>
	<Toggle id="redemption" bind:checked {disabled}
		><h3>
			Redemption rate {#if !disabled && !redemptionRate}
				<span>({disabled ? '' : '100%'})</span>
			{/if}
		</h3></Toggle
	>
</header>
<!-- TODO The bonding curve -->
{#if disabled}
	<AlertText>
		Disabled when your project's distribution limit isn't <b>Specifc</b>
	</AlertText>
{/if}
<p>
	This rate determines the amount of overflow that each token can be redeemed for at any given time.
	On a lower redemption rate, redeeming a token increases the value of each remaining token,
	creating an incentive to hold tokens longer than others. The default redemption rate of 100% means
	all tokens will have equal value regardless of when they are redeemed. Learn more in this
	<a href="https://youtu.be/dxqc3yMqi5M">short video.</a>
</p>

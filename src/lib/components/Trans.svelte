<script lang="ts">
	// See provider/Intl.svelte for usage
	import { getContext } from 'svelte';
	const i18n = getContext('i18n');

	export let message: string;
	export let props: { [key: string]: string };

	let data: HTMLElement;

	$: {
		data.innerText = $i18n._(data?.innerText, {});
	}
</script>

{#if message}
	{$i18n._(message, props)}
{:else}
	<div bind:this={data}><slot /></div>
{/if}

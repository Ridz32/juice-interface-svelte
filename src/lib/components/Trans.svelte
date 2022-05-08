<script lang="ts">
	import type Store from '$utils/Store';
	import type { I18n } from 'lingui_core/esm';
	// See provider/Intl.svelte for usage
	import { getContext } from 'svelte';
	const i18n = getContext('i18n') as Store<I18n>;

	export let message = '';
	export let props: { [key: string]: string } = {};

	let data: HTMLElement;

	$: if (data) {
		data.innerText = $i18n._(data?.innerText, {});
	}
</script>

{#if message}
	{#if message.match(/<\w+/) && message.match(/>/)}
		{@html $i18n._(message, props)}
	{:else}
		{$i18n._(message, props)}
	{/if}
{:else}
	<div bind:this={data}><slot /></div>
{/if}

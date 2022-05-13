<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let options: { [key: string]: any }[] = [];
	export let value = options[0]?.value;

	let isOpen = false;
</script>

<div class="wrapper">
	<div
		on:click={() => {
			isOpen = !isOpen;
		}}
	>
		<slot />
	</div>
	{#if isOpen}
		<div class="dropdown" transition:slide={{ duration: 300 }}>
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		/* width: 100%; */
		position: relative;
	}

	.dropdown {
		position: absolute;
		width: 200px;
		margin-top: 10px;
		background: var(--background-l1);
		z-index: 900;
		box-shadow: 0 8px 12px var(--boxShadow-primary);
	}
</style>

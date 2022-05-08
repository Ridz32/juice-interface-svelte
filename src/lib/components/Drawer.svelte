<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let shown = false;

	function close() {
		shown = false;
	}
</script>

{#if shown}
	<!-- The element that makes the whole page besides drawer darkish  -->
	<div class="overlay" in:fade={{ duration: 100 }} out:fade on:click={close} />

	<div class="drawer-container" in:fly={{ x: 120 }} out:fly={{ x: 120 }}>
		<!-- TODO close button (X) in top right -->
		<slot {close} />
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.drawer-container {
		overflow: scroll;
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		background-color: var(--background-l0);
		z-index: 999;
		width: 640px;
		height: 100%;
	}

	@media (max-width: 640px) {
		.drawer-container {
			width: 100%;
		}
	}
</style>

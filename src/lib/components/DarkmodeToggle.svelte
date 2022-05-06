<script>
	import Icon from '$lib/components/Icon.svelte';
	import { darkMode } from '$stores';
</script>

<div role="switch" aria-checked={darkMode} on:click={() => darkMode.set(!$darkMode)}>
	<div class:active={!$darkMode}>
		<Icon name="sun" />
	</div>
	<div class:active={$darkMode}>
		<Icon name="moon" />
	</div>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	div[role="switch"] {
		border: 1px solid var(--stroke-tertiary);
		transition: border-color 0.12s ease-out;
		width: 60px;
		height: 30px;
		border-radius: 15px;
		cursor: pointer;
		color: var(--icon-tertiary);
	}
	div[role="switch"]:hover {
		border-color: var(--stroke-secondary);
	}

	.active {
		color: var(--icon-primary);
	}
</style>

<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	export let selected: boolean;
	// export let onClick: () => void;
</script>

<div class="wrapper" class:selected on:click>
	<div class="selected-indicator">
		{#if selected}
			<Icon name="checkCircle" />
		{/if}
	</div>
	<div class="content">
		<header><slot name="header" /></header>
		<slot name="body" />
		<slot name="address" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.282);
		border-radius: 1px;
		cursor: pointer;
		background: rgb(251, 249, 246);
		margin-bottom: 0.5rem;
	}

	.selected {
		border: 1px solid rgb(24, 180, 199);
	}

	.selected-indicator {
		margin-right: 10px;
		min-width: 20px;
		color: rgb(24, 180, 199);
	}
</style>

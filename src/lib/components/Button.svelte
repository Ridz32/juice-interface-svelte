<script lang="ts">
	export let disabled = false;
	export let onClick: (e: Event) => void = () => {};
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
	export let type:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'danger'
		| 'success'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark' = 'primary';
</script>

<button class={`${size} ${type}`} {disabled} on:click={onClick}><slot /></button>

<style>
	button {
		margin-top: 2rem;
		background: var(--background-action-primary);
		border-color: transparent;
		box-shadow: 0 6px 10px rgba(19, 13, 13, 0.08);
		border-radius: var(--radius-sm);
		color: var(--text-over-action-primary);
		font-weight: 500;
		height: 40px;
		padding: 6.4px 15px;
		font-size: 16px;
		cursor: pointer;
	}
	button[disabled] {
		background: var(--background-disabled);
		border-color: var(--stroke-disabled);
		color: var(--text-disabled);
		cursor: not-allowed;
	}
	button:hover {
		box-shadow: 0 8px 12px rgb(0 0 0 / 12%);
	}

	.md {
		height: 32px;
		font-size: 14px;
		font-weight: 300;
		padding: unset;
		width: 150px;
		margin-top: 0;
	}

	.secondary {
		background: transparent;
		color: var(--background-action-primary);
		border: 1px solid var(--background-action-primary);
	}
</style>

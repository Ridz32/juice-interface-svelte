<script lang="ts">
    export let value: string | number | undefined = undefined;
</script>

<input {...$$props} bind:value />

<style>
	input {
		height: 28px;
		width: 100%;
		background: transparent;
		border: 1px solid var(--stroke-tertiary);
		transition: border-color 120ms ease-out;
		text-indent: 5px;
		padding: 2.5px;
	}

	input::placeholder {
		color: var(--text-tertiary);
		font-weight: 300;
	}

	input:focus {
		border: var(--background-action-primary) 1px solid;
		outline: none;
	}

	input:hover {
		border: var(--background-action-primary) 1px solid;
	}
</style>

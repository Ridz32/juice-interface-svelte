<script lang="ts">
	export let value: string | number | undefined = undefined;
</script>

<div class="input-wrapper">
	<input {...$$props} bind:value />
	<div class="addon">
		<slot name="addon" />
	</div>
</div>

<style>
	input {
		height: 30px;
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

	.input-wrapper {
		position: relative;
	}

	.addon {
		position: absolute;
		top: 5px;
		right: 10px;
		width: 40px;
		height: 20px;
	}
</style>

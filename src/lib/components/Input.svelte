<script lang="ts">
	export let value: string | number | undefined = undefined;
</script>

<div class="input-wrapper">
	<div class="prefix">
		<slot name="prefix" />
	</div>
	<input {...$$props} bind:value on:blur class:hasPrefix={$$slots.prefix}/>
	<div class="addon">
		<slot name="addon" />
	</div>
</div>

<style>
	input {
		width: 100%;
		background: transparent;
		border: 1px solid var(--stroke-primary);
		transition: border-color 120ms ease-out;
		padding: 4px 11px;
		line-height: 1.5715;
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
		height: 20px;
	}

	.prefix {
		position: absolute;
		top: 5px;
		left: 10px;
	}

	.hasPrefix {
		text-indent: 15px;
	}
</style>

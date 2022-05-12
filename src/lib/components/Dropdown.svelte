<script lang="ts">
	export let options: any = undefined;

	export let value = options[0].value;
	let selectedOption: any = options.find((option) => option.value === value);
	let isOpen = true;
</script>

<div class="custom-select">
	<div class="select-selected">
		{selectedOption.label}
	</div>
	<div class="dropdown" class:hidden={!isOpen}>
		{#each options as option}
			<div class="select-item" class:active={option.value === value}>
				{option.label}
			</div>
		{/each}
	</div>

</div>

<style>
	.custom-select {
		width: 100%;
		position: relative;
		border: 1px solid var(--stroke-primary);
		border-radius: 2px;
		height: 32px;
	}

	.dropdown {
        margin-top: 1px;
		background: var(--background-l0);
		z-index: 900;
		box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
			0 9px 28px 8px rgb(0 0 0 / 5%);
	}

	.select-item {
		padding: 6px 12px;
		cursor: pointer;
	}

    .active {
        font-weight: 600px;
    }
	.active, .select-item:hover {
		background: var(--background-l2);
	}

	.select-selected {
		background-color: transparent;
	}

	/* Style the arrow inside the select element: */
	.select-selected:after {
		position: absolute;
		content: '';
		top: 14px;
		right: 10px;
		width: 0;
		height: 0;
		border: 6px solid transparent;
		border-color: #fff transparent transparent transparent;
	}

	.select-selected {
		color: var(--text-primary);
		padding: 4px 12px;
		font-weight: 300 !important;
		border: 1px solid transparent;
		border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
		cursor: pointer;
	}

	/* Hide the items when the select box is closed: */
	.hidden {
		display: none;
	}
</style>

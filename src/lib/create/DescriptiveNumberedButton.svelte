<script>
	import Icon from '$lib/components/Icon.svelte';
	export let description;
	export let number;
	export let onClick;
	export let title;
	export let visited;
</script>

<div role="button" class={visited ? 'visited' : ''} on:click={onClick}>
	<div class="number">{number}</div>
	<div class="details">
		<div class="title">{title}</div>
		<div class="description">
			{description}
		</div>
	</div>
	<div class="icon">
		{#if visited}
			<Icon name="checkCircle" />
		{:else}
			<Icon name="caret" />
		{/if}
	</div>
</div>

<style>
	.icon {
		align-self: center;
		margin-left: auto;
		fill: rgb(24, 180, 199);
		width: 15px;
		height: 15px;
		/* padding-left: 20px; */
	}

	.number {
		margin-right: 15px;
	}

	.description {
		color: var(--text-primary);
		font-weight: 300;
		font-size: 0.75rem;
		margin-top: 10px;
	}

	div[role='button'] {
		display: flex;
		cursor: pointer;
		padding: 15px;
		border-radius: 1px;
		font-weight: 500;
		color: rgb(24, 180, 199);
		border-color: rgb(24, 180, 199);
		border-style: solid;
		border-width: 1px;
		margin-bottom: 16px;
	}

	div[role='button'].visited {
		color: rgba(0, 0, 0, 0.333);
		border-color: rgba(0, 0, 0, 0.333);
	}

	div[role='button'].visited .description {
		color: rgba(0, 0, 0, 0.333);
	}

	/* div[role="button"].visited svg {
    fill: rgba(0, 0, 0, 0.333);
  } */
</style>

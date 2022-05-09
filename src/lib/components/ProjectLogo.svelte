<script lang="ts">
	export let uri: string;
	export let size: number | undefined;
	const _size = size ?? 80;
	console.log(uri);
</script>

<div class="project-logo">
	{#if uri !== ''}
		<img src={uri} alt="The project logo" />
	{:else}
		<div class="no-logo">🧃</div>
	{/if}
</div>

<style>
	img {
		max-height: '100%';
		min-width: '100%';
		object-fit: 'cover';
		object-position: 'center';
	}

	.project-logo {
		display: 'flex';
		align-items: 'center';
		justify-content: 'center';
		overflow: 'hidden';
		height: 110;
		width: 110;
		/* border-radius: radii.xl;
        background: uri ? undefined : colors.background.l1; */
	}

	.no-logo {
		font-size: 2.5rem;
	}
</style>

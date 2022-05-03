<script lang="ts">
	import { projectMetadata } from '../stores';
	import Icon from '$lib/components/Icon.svelte';
</script>

<!-- The top component showing the logo preview with basic treasury info -->
<div class="info">
	{#if $projectMetadata.logoUri}
		<img class="logo" src={$projectMetadata.logoUri} alt="Uploaded logo" />
	{:else}
		<div class="logo-placeholder">🧃</div>
	{/if}
	<div class="info-text">
		<h1>{$projectMetadata.name || 'Untitled project'}</h1>
		<div class="social-list">
			<p>{$projectMetadata.infoUri || ''}</p>
			{#if $projectMetadata.twitter}
				<p>
					<Icon name="twitter" />
					{$projectMetadata.twitter}
				</p>
			{/if}
			{#if $projectMetadata.discord}
				<p>
					<Icon name="discord" />
					{$projectMetadata.discord}
				</p>
			{/if}
		</div>
		<p class="description">{$projectMetadata.description || ''}</p>
	</div>
</div>

<style>
	.description {
		color: rgba(0, 0, 0, 0.6);
		overflow-wrap: break-word;
		padding-right: 0.5rem;
	}

	.info {
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 0.333);
	}

	.logo {
		height: 150px;
		width: 150px;
	}
	.logo-placeholder {
		background-color: rgb(231, 227, 220);
		height: 150px;
		width: 150px;
		font-size: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-text {
		padding: 0px 20px;
	}
	.info .info-text h1 {
		color: rgba(0, 0, 0, 0.333);
		font-size: 36px;
		font-weight: 500;
		margin: 0;
	}

	.social-list {
		display: flex;
	}

	.social-list p {
		margin-right: 20px;
		color: var(--text-over-action-secondary);
	}
</style>

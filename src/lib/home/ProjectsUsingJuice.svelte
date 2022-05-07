<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getProjects } from '$data/project';
</script>

<section>
	<div>
		<h1>Projects using Juicebox</h1>
		{#await getProjects({ pageSize: 4 })}
			<Icon name="loading" spin={true} />
		{:then projects}
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		{:catch error}
			<p style="color: var(--text-failure)">{error}</p>
		{/await}
	</div>
	<div>
		<h1>Latest Payments</h1>
	</div>
</section>

<style>
	section {
		display: flex;
		max-width: 1200px;
		margin: auto;
	}
	h1 {
		color: var(--text-header);
		font-weight: 600;
	}

	div:first-of-type {
		margin-left: 40px;
		flex: 0 0 35%;
	}

	div:last-of-type {
		margin-left: 40px;
	}

	@media (max-width: 850px) {
		div:first-of-type {
            margin-left: 0;
			flex: 0 0 100%;
		}
	}
</style>

<script lang="ts">
	import ProjectCreateEvent from './ProjectCreateEvent.svelte';
	import type { ProjectEvent } from '$models/subgraph-entities/vX/project-event';

	export let event: ProjectEvent;
</script>

<div class="projectEvent">
	{#if event.projectCreateEvent}
		<ProjectCreateEvent event={event.projectCreateEvent} />
	{/if}
</div>

<style>
	:global(.projectEvent p) {
		margin: 0;
	}

	:global(.projectEvent small) {
		color: var(--text-tertiary);
	}

	:global(.timestamp) {
		color: var(--text-tertiary);
		font-size: 0.7rem;
		font-weight: 300;
		text-align: end;
	}

	/* .address {
		color: var(--text-tertiary);
		font-weight: 300;
		font-size: 12px;
	}
	.amount {
		font-size: 1rem;
		font-weight: 300;
	}

	.payment {
		padding-top: 10px;
		margin-bottom: 10px;
		padding-bottom: 20px;
		border-bottom: 1px solid var(--stroke-tertiary);
	} */
</style>

<script lang="ts">
	import ProjectCreateEvent from './ProjectCreateEvent.svelte';
	import type { ProjectEvent } from '$models/subgraph-entities/vX/project-event';
	import PayEvent from './PayEvent.svelte';

	export let event: ProjectEvent;
</script>

<div class="projectEvent">
	{#if event.projectCreateEvent}
		<ProjectCreateEvent event={event.projectCreateEvent} />
	{:else if event.payEvent}
		<PayEvent event={event.payEvent} />
	{/if}
</div>

<style>
	.projectEvent {
		padding-top: 10px;
		margin-bottom: 10px;
		padding-bottom: 20px;
		border-bottom: 1px solid var(--stroke-tertiary);
	}

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

	:global(.address) {
		color: var(--text-tertiary);
		font-weight: 300;
		font-size: 12px;
	}
	:global(.amount) {
		font-size: 1rem;
        line-height: 1.4;
		font-weight: 400;
        color: var(--text-primary);
	}
</style>

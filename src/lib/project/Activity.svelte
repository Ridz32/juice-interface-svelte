<script lang="ts">
	import { getContext } from 'svelte';
	import type Store from '$utils/Store';
	import type { Project } from '$models/subgraph-entities/project';
	import type { ProjectMetadata } from '$models/project-metadata';
	import Icon from '$lib/components/Icon.svelte';
	import PayEvent from './PayEvent.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';

	enum ActivityType {
		PAY = 'PAY',
		REDEEM = 'REDEEM',
		WITHDRAW = 'WITHDRAW',
		RESERVES = 'RESERVES'
	}

	const projectContext = getContext('PROJECT') as {
		project: Store<Project>;
		metadata: Store<ProjectMetadata>;
	};
	const project = projectContext.project;
	const payEvents = $project.payEvents;

	export let loading: boolean;
	export let current: ActivityType = ActivityType.PAY;
</script>

<section>
	<header>
		<InfoSpaceBetween>
			<div slot="left">
				<h4>Activity</h4>
				<div class="icon">
					<Icon name="download" />
				</div>
			</div>
			<div slot="right">
				<p class:current={ActivityType.PAY === current}>Pay</p>
				<p class:current={ActivityType.REDEEM === current}>Redeem</p>
				<p class:current={ActivityType.WITHDRAW === current}>Withdraw</p>
				<p class:current={ActivityType.RESERVES === current}>Reserves</p>
			</div>
		</InfoSpaceBetween>
	</header>
	{#if loading}
		<Icon name="loading" spin />
	{/if}
	{#each payEvents as payment}
		<PayEvent {payment} />
	{/each}
</section>

<style>
	section {
		flex: 0 0 50%;
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;
		margin: 0 auto;
		margin-top: 40px;
	}

	h4 {
		font-weight: 600;
		color: var(--text-header);
	}

	div[slot='left'],
	div[slot='right'] {
		display: flex;
		gap: 20px;
	}

	div[slot='left'] {
		display: flex;
		align-items: baseline;
	}

	div[slot='right'] {
		text-transform: uppercase;
		font-weight: 300;
		color: var(--text-tertiary);
	}

	.current {
		font-weight: 600;
		color: var(--text-secondary);
	}

	.icon {
		font-size: 1rem;
		color: var(--text-action-primary);
	}

	@media (max-width: 768px) {
		section {
			flex: 0 0 100%;
		}
	}
</style>

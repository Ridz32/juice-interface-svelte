<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type Store from '$utils/Store';
	import type { Project } from '$models/subgraph-entities/project';
	import type { ProjectMetadata } from '$models/project-metadata';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import type { V2ProjectContextType } from '$models/project-type';
	import PayEvent from './PayEvent.svelte';
	import { getProjectEvents } from '$data/event';

	const project = getContext('PROJECT') as Store<V2ProjectContextType>;
	let events = [];

	enum ActivityType {
		PAY = 'PAY',
		REDEEM = 'REDEEM',
		WITHDRAW = 'WITHDRAW',
		RESERVES = 'RESERVES'
	}

	onMount(async () => {
		// Certain this should be projectId, but getting error from subgraph
		events = await getProjectEvents(
			[
				{ key: 'projectId', value: $project.projectId.toNumber() },
				{ key: 'cv', value: '2' }
			],
			0,
			50
		);
	});

	export let loading: boolean = false;
	export let current: ActivityType = ActivityType.PAY;
</script>

<section>
	<header>
		<InfoSpaceBetween>
			<div slot="left">
				<h4>Activity</h4>
				<!-- <div class="icon">
					<Icon name="download" />
				</div> -->
			</div>
			<div slot="right">
				<p
					class:current={ActivityType.PAY === current}
					on:click={() => {
						current = ActivityType.PAY;
					}}
				>
					Pay
				</p>
				<p
					class:current={ActivityType.REDEEM === current}
					on:click={() => {
						current = ActivityType.REDEEM;
					}}
				>
					Redeem
				</p>
				<p
					class:current={ActivityType.WITHDRAW === current}
					on:click={() => {
						current = ActivityType.WITHDRAW;
					}}
				>
					Withdraw
				</p>
				<p
					class:current={ActivityType.RESERVES === current}
					on:click={() => {
						current = ActivityType.RESERVES;
					}}
				>
					Reserves
				</p>
			</div>
		</InfoSpaceBetween>
	</header>
	{#if loading}
		<Icon name="loading" spin />
	{/if}
	{#if current === ActivityType.PAY}
		{#each events as event}
			<PayEvent payment={event} />
		{/each}
	{:else if current === ActivityType.REDEEM}
		<p>Todo</p>
	{:else if current === ActivityType.WITHDRAW}
		<p>Todo</p>
	{:else}
		<p>Todo</p>
	{/if}
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

	div[slot='right'] p:hover {
		cursor: pointer;
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

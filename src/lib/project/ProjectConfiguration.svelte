<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Trans from '$lib/components/Trans.svelte';
    // TODO move these files to common area, rewrite their usage of store
	import FundingDrawer from '$lib/create/FundingCycle/FundingDrawer.svelte';
	import TokenDrawer from '$lib/create/FundingCycle/TokenDrawer';
	import ProjectDetails from '$lib/create/ProjectDetails.svelte';
	import RulesDrawer from '$lib/create/RulesDrawer.svelte';

	let deployDisabled = true;
	let deployInProgress = false;

	let drawerOpen = false;
	let current: Drawers;

	enum Drawers {
		Metadata = 'Metadata',
		Funding = 'Funding',
		Token = 'Token',
		Rules = 'Rules'
	}
</script>

<h3>Project configuration</h3>

<section>
	<h4><Trans>Edit project details</Trans></h4>
	<p><Trans>Changes to project details will take effect immediately.</Trans></p>
	<button
		on:click={() => {
			drawerOpen = true;
			current = Drawers.Metadata;
		}}>Project details <Icon name="caret" /></button
	>
	<br />
	<h4><Trans>Reconfigure upcoming funding cycles</Trans></h4>
	<p>
		<Trans
			>Any changes you make will take effect in funding cycle #2. The current funding cycle (#1)
			won't be altered.</Trans
		>
	</p>
	<button
		on:click={() => {
			drawerOpen = true;
			current = Drawers.Funding;
		}}><Trans>Distribution limit, duration and payouts</Trans> <Icon name="caret" /></button
	>
	<button
		on:click={() => {
			drawerOpen = true;
			current = Drawers.Token;
		}}><Trans>Token</Trans> <Icon name="caret" /></button
	>
	<button
		on:click={() => {
			drawerOpen = true;
			current = Drawers.Rules;
		}}><Trans>Rules</Trans> <Icon name="caret" /></button
	>

	<div class="buttons">
		<Button size="md" type="secondary">Cancel</Button>
		<Button size="md" disabled={deployDisabled}>
			Deploy new project configuration
			{#if deployInProgress}
				<Icon name="loading" spin />
			{/if}
		</Button>
	</div>
</section>

<Drawer bind:shown={drawerOpen} let:close>
	<div class="content">
		{#if current === Drawers.Metadata}
			<h3>Reconfigure project details</h3>
			<ProjectDetails
				info={'Project details reconfigurations will create a separate transaction.'}
			/>
			<Button size="md">Save project details</Button>
		{:else if current === Drawers.Funding}
			<FundingDrawer {close} />
		{:else if current === Drawers.Rules}
			<RulesDrawer {close} />
		{:else if current === Drawers.Token}
			<TokenDrawer {close} />
		{/if}
	</div>
</Drawer>

<style>
	section {
		padding: 20px 0px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid var(--stroke-action-secondary);
		padding: 12px 6px;
		width: 100%;
		background: transparent;
		margin: 16px 0px;
	}

	p {
		font-weight: 300;
	}

	h3,
	h4 {
		color: var(--text-header);
	}

	.buttons {
		float: right;
	}

	.content {
		padding: 2rem;
	}
</style>

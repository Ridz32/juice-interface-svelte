<script>
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Trans from '$lib/components/Trans.svelte';

	let deployDisabled = true;
	let deployInProgress = false;
</script>

<h3>Project configuration</h3>

<section>
	<h4><Trans>Edit project details</Trans></h4>
	<p><Trans>Changes to project details will take effect immediately.</Trans></p>
	<button>Project details <Icon name="caret" /></button>
	<br />
	<h4><Trans>Reconfigure upcoming funding cycles</Trans></h4>
	<p>
		<Trans
			>Any changes you make will take effect in funding cycle #2. The current funding cycle (#1)
			won't be altered.</Trans
		>
	</p>
	<button><Trans>Distribution limit, duration and payouts</Trans> <Icon name="caret" /></button>
	<button><Trans>Token</Trans> <Icon name="caret" /></button>
	<button><Trans>Rules</Trans> <Icon name="caret" /></button>

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
</style>

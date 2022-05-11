<script lang="ts">
	import { getContext } from 'svelte';
	import type { V2ProjectContextType } from '$models/project-type';
	import type Store from '$utils/Store';
	import Icon from '$lib/components/Icon.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import Button from '$lib/components/Button.svelte';
    import { closeModal } from '$lib/components/Modal.svelte';

	const project = getContext('PROJECT') as Store<V2ProjectContextType>;
	// MOCK data for now
	const tokenSymbol = 'BREAD';

	const buttons = [
		{
			label: `Redeem ${tokenSymbol}`,
			body: "Redeem your BONE for a portion of the project's overflow. Any BONE you redeem will be burned."
		},
		{
			label: `Burn ${tokenSymbol}`,
			body: "Burn your BONE. You won't receive ETH in return because this project has no overflow."
		},
		{
			label: `Claim ${tokenSymbol} as ERC-20`,
			body: 'Move your BONE from the Juicebox contract to your wallet.'
		}
	];
</script>

<main>
	<h3>Manage {$project.tokenSymbol || ''} tokens</h3>
	{#each buttons as button}
		<button>
			<div>
				<h4><Trans>{button.label}</Trans></h4>
				<p>{button.body}</p>
			</div>
			<div class="icon">
				<Icon name="caret" />
			</div>
		</button>
	{/each}
</main>
<div class="buttons">
    <!-- TODO why won't it close -->
	<Button type="secondary" size="md" on:click={closeModal}>Cancel</Button>
</div>

<style>
	h3 {
		color: var(--text-header);
        margin-bottom: 40px;
	}

	h4,
	.icon {
		color: var(--text-action-primary);
	}

	h4,
	p {
		text-align: left;
	}

	main {
		max-width: 480px;
	}
	/* TODO used in ProjectConfig, needs to be drawer type button */
	button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid var(--stroke-action-primary);
		padding: 12px 12px;
		width: 100%;
		background: transparent;
		margin: 16px 0px;
		cursor: pointer;
	}

	button p {
		font-size: 0.75rem;
		font-weight: 300;
		margin: 5px 0px;
	}

	.buttons {
		float: right;
	}

    .icon {
        margin-left: 10px;
    }
</style>

<script lang="ts">
	import { getContext } from 'svelte';
	import type { V2ProjectContextType } from '$models/project-type';
	import { getTotalSplitsPercentage } from '$utils/v2/distributions';
	import type Store from '$utils/store';
	import ActionModal from '$lib/components/ActionModal.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import SimpleSplits from '$lib/components/SimpleSplits.svelte';
	import { formattedNum } from '$utils/formatNumber';

	export let close: () => {};
    // TODO show the reserved amounts... could probably send 
    // in the reserved amount to SimpleSplit as the distribution limit
	const project = getContext('PROJECT') as Store<V2ProjectContextType>;
	const reservedRate = $project.fundingCycleMetadata.reservedRate;
	const totalSplitPercentageTokenSplits = getTotalSplitsPercentage(
		$project.reservedTokensSplits || []
	);

	const title = `Distribute reserved ${$project.tokenSymbol || ''}`;

	const reservedAmount = 5500;

	// TODO write for distributing funds
	function distributeFunds() {
		console.log('TODO: distributeFunds');
	}
</script>

<ActionModal {title}>
	<InfoSpaceBetween>
		<p slot="left">Reserved {$project.tokenSymbol || ''}:</p>
		<p slot="right">{formattedNum(reservedAmount)} {$project.tokenSymbol || 'tokens'}</p>
	</InfoSpaceBetween>

	<h4>{$project.tokenSymbol || ''} recipients</h4>
	{#if $project.reservedTokensSplits}
		{#each $project.reservedTokensSplits as split}
			<SimpleSplits {split} />
		{/each}
	{/if}
	<InfoSpaceBetween>
		<p slot="left">Project owner <Icon name="crown" />:</p>
		<p slot="right">{100 - totalSplitPercentageTokenSplits}%</p>
	</InfoSpaceBetween>
	<div slot="footer">
		<Button type="secondary" size="md" on:click={close}>Close</Button>
		<Button type="primary" size="md" on:click={distributeFunds}>Distribute funds</Button>
	</div>
</ActionModal>

<style>
	h4 {
		color: var(--text-header);
	}
</style>

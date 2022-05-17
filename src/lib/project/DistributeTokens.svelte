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
	import OwnerCrown from '$lib/components/OwnerCrown.svelte';
	import { writeContract } from '$utils/web3/contractReader';
	import { V2ContractName } from '$models/v2/contracts';
	import { openModal, bind } from '$lib/components/Modal.svelte';
	import PendingTransaction from '$lib/components/PendingTransaction.svelte';
	import { connectedAccount, walletConnect } from '$stores/web3';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';

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

	async function distributeTokens() {
		await walletConnect();
		const txnResponse = await writeContract(
			V2ContractName.JBController,
			'distributeReservedTokensOf',
			[$project.projectId, 'distribute tokens']
		);

		openModal(
			bind(PendingTransaction, {
				txnResponse
			})
		);
	}
</script>

<ActionModal {title}>
	<InfoSpaceBetween>
		<p slot="left">Reserved {$project.tokenSymbol || ''}:</p>
		<p slot="right">
			{formattedNum($project.reservedTokenBalance)}
			{$project.tokenSymbol || 'tokens'}
		</p>
	</InfoSpaceBetween>

	<h4>{$project.tokenSymbol || ''} recipients</h4>
	{#if $project.reservedTokensSplits}
		{#each $project.reservedTokensSplits as split}
			<SimpleSplits {split} />
		{/each}
	{/if}
	<InfoSpaceBetween>
		<p slot="left">
			{$project.projectOwnerAddress === $connectedAccount
				? '(you)'
				: getTruncatedAddress($project.projectOwnerAddress)}
			<OwnerCrown />:
		</p>
		<p slot="right">{100 - totalSplitPercentageTokenSplits}%</p>
	</InfoSpaceBetween>
	<div slot="footer">
		<Button type="secondary" size="md" on:click={close}>Close</Button>
		<Button type="primary" size="md" on:click={distributeTokens}>Distribute funds</Button>
	</div>
</ActionModal>

<style>
	h4 {
		color: var(--text-header);
	}
</style>

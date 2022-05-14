<script lang="ts" context="module">
	import { browser } from '$app/env';
	export const hydrate = true;
	export const router = browser;
	export const prerender = true;
</script>

<script lang="ts">
	import { BigNumber } from 'ethers';
	import { modal } from '$stores';
	import { onMount, setContext } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Details from '$lib/project/Details.svelte';
	import Head from '$lib/project/Head.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Issue from '$lib/components/Issue.svelte';
	import Modal, { openModal } from '$lib/components/Modal.svelte';
	import Paid from '$lib/project/Paid.svelte';
	import Store from '$utils/Store';

	import { page } from '$app/stores';
	import type { V2ProjectContextType } from '$lib/create/stores';
	import { transactContract } from '$utils/web3/contractReader';
	import { V2ContractName } from '$models/v2/contracts';
	import { ETH_PAYOUT_SPLIT_GROUP } from '$constants/v2/splits';
	import { ETH_TOKEN_ADDRESS } from '$constants/v2/juiceboxTokens';
	import { getProjectMetadata } from '$data/project';
	import Activity from '$lib/project/Activity.svelte';
	import NextSteps from '$lib/project/NextSteps.svelte';

	let project = new Store<V2ProjectContextType>({} as any);

	setContext('PROJECT', project);

	let loading = true;
	let issue: string | false = false;

	const isNewDeploy = $page.url.searchParams.get('newDeploy');

	onMount(async () => {
		try {
			await new Promise((r) => setTimeout(r, 1000));
			$project.projectId = BigNumber.from($page.params.projectId);
			const [cid] = await transactContract(V2ContractName.JBProjects, 'metadataContentOf', [
				$project.projectId,
				0
			]);
			const metadata = await getProjectMetadata(cid);
			$project.projectMetadata = metadata;

			/****/
			[$project.fundingCycle, $project.fundingCycleMetadata] = await transactContract(
				V2ContractName.JBController,
				'currentFundingCycleOf',
				[$project.projectId]
			);

			/****/
			const [splitResult] = await transactContract(
				V2ContractName.JBSplitsStore,
				'splitsOf',
				$project.projectId && $project?.fundingCycle?.configuration?.toString()
					? [
							$project.projectId.toHexString(),
							$project?.fundingCycle?.configuration?.toString(),
							ETH_PAYOUT_SPLIT_GROUP
					  ]
					: null
			);

			$project.payoutSplits = splitResult.map((split) => {
				return {
					percent: split?.percent?.toNumber(),
					lockedUntil: split?.lockedUntil?.toNumber(),
					projectId: split?.projectId?.toHexString(),
					beneficiary: split?.beneficiary,
					allocator: split?.allocator,
					preferClaimed: split?.preferClaimed
				};
			});
			/****/

			const [terminals] =
				(await transactContract(
					V2ContractName.JBDirectory,
					'terminalsOf',
					$project.projectId ? [$project.projectId.toHexString()] : []
				)) || [];

			$project.primaryTerminal = terminals?.[0];

			/****/
			[$project.tokenAddress] = await transactContract(
				V2ContractName.JBTokenStore,
				'tokenOf',
				$project.projectId ? [$project.projectId.toHexString()] : []
			);

			/****/
			const [value] = await transactContract(
				V2ContractName.JBSplitsStore,
				'splitsOf',
				$project.projectId && $project.fundingCycle?.configuration?.toString()
					? [
							$project.projectId.toHexString(),
							$project.fundingCycle?.configuration?.toString(),
							ETH_PAYOUT_SPLIT_GROUP
					  ]
					: null
			);

			$project.payoutSplits = value.map((split) => {
				return {
					percent: split.percent.toNumber(),
					lockedUntil: split.lockedUntil.toNumber(),
					projectId: split.projectId.toHexString(),
					beneficiary: split.beneficiary,
					allocator: split.allocator,
					preferClaimed: split.preferClaimed
				};
			});

			/****/

			[$project.distributionLimit, $project.distributionLimitCurrency] = await transactContract(
				V2ContractName.JBController,
				'distributionLimitOf',
				$project.projectId &&
					$project.fundingCycle?.configuration?.toString() &&
					$project.primaryTerminal
					? [
							$project.projectId,
							$project.fundingCycle?.configuration?.toString(),
							$project.primaryTerminal,
							ETH_TOKEN_ADDRESS
					  ]
					: []
			);

			/****/

			const [ret] = await transactContract(
				V2ContractName.JBProjects,
				'ownerOf',
				$project.projectId ? [BigNumber.from($project.projectId).toHexString()] : null
			);

			$project.projectOwnerAddress = ret;

			console.log($project);

			$project.projectOwnerAddress = ret;

			loading = false;
		} catch (e) {
			issue = e.message;
		}

		// TODO probably need to go through above and figure out appropiate error messages on
		// a per stage basis
		if (isNewDeploy) {
			openModal(NextSteps);
		}
	});
	console.log($project);
</script>

<section>
	<div class="content">
		{#if issue}
			<Issue center>
				{issue}
			</Issue>
		{:else if loading}
			<div class="loading">
				<Icon name="loading" spin />
			</div>
		{:else}
			<div>
				<Head />
				<!-- <Stats /> -->
				<Paid />
				<div class="row">
					<Details />
					<Activity />
				</div>
			</div>
			<div style="text-align: center; padding: 20px;">
				<Button type="link" on:click={() => window.scrollTo(0, 0)}>Back to top</Button>
			</div>
		{/if}
		<a
			class="feedback-button hide-mobile "
			href="https://auditor.typeform.com/to/REMUTIbQ?project=juicebox&amp;address=0x283e4500fd7c9e1bf83b828f13a597b47311700c&amp;resolution=1139x984&amp;referrer=stoned-banny#"
			target="_blank"
			rel="noopener noreferrer"><img src="/images/stoned_banny.png" alt="Stoned banny" /></a
		>
	</div>
</section>
<Modal show={$modal} />

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: transparent;
	}

	.content {
		max-width: 1080px;
		margin: 0px auto;
		padding: 20px;
		width: 100%;
	}

	.loading {
		text-align: center;
		font-size: 2rem;
		color: var(--text-header);
	}

	.row {
		display: flex;
		flex-flow: row wrap;
		margin-left: -20px;
		margin-right: -20px;
		padding-bottom: 40px;
		row-gap: 0px;
	}
</style>

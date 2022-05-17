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
	import { contracts, readContract, readContractByAddress } from '$utils/web3/contractReader';
	import { V2ContractName } from '$models/v2/contracts';
	import { ETH_PAYOUT_SPLIT_GROUP } from '$constants/v2/splits';
	import { ETH_TOKEN_ADDRESS } from '$constants/v2/juiceboxTokens';
	import { getProjectMetadata } from '$data/project';
	import Activity from '$lib/project/Activity.svelte';
	import NextSteps from '$lib/project/NextSteps.svelte';
	import { JUICEBOX_MONEY_METADATA_DOMAIN } from '$constants/v2/metadataDomain';
	import { querySubgraph } from '$utils/graph';
	import { ipfsCidUrl } from '$utils/ipfs';
	import axios from 'axios';
	import { consolidateMetadata } from '$models/project-metadata';
	import Loading from '$lib/components/Loading.svelte';
	import { Currency } from '$constants';
	import { getCurrencyConverter } from '$data/currency';
	import { V2CurrencyName, V2_CURRENCY_ETH, V2_CURRENCY_USD } from '$utils/v2/currency';
	import type { V2CurrencyOption } from '$models/v2/currencyOption';
	import ERC20ContractAbi from '$constants/ERC20ContractAbi';

	let project = new Store<V2ProjectContextType>({} as any);

	setContext('PROJECT', project);

	let loading = true;
	let issue: string | false = false;

	const isNewDeploy = $page.url.searchParams.get('newDeploy');

	onMount(async () => {
		try {
			$project.projectId = BigNumber.from($page.params.projectId);
			const metadataCID = await readContract(V2ContractName.JBProjects, 'metadataContentOf', [
				$project.projectId,
				JUICEBOX_MONEY_METADATA_DOMAIN
			]);

			const metadata = await getProjectMetadata(metadataCID);
			$project.projectMetadata = metadata;

			/****/
			[$project.fundingCycle, $project.fundingCycleMetadata] = await readContract(
				V2ContractName.JBController,
				'currentFundingCycleOf',
				[$project.projectId]
			);

			/****/
			const splitResult = await readContract(
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

			const terminals =
				(await readContract(
					V2ContractName.JBDirectory,
					'terminalsOf',
					$project.projectId ? [$project.projectId.toHexString()] : []
				)) || [];

			$project.primaryTerminal = terminals?.[0];

			/****/
			try {
				$project.tokenAddress = await readContract(
					V2ContractName.JBTokenStore,
					'tokenOf',
					$project.projectId ? [$project.projectId.toHexString()] : []
				);

				$project.tokenSymbol = await readContractByAddress(
					$project.tokenAddress,
					ERC20ContractAbi,
					'symbol'
				);
			} catch (error) {}

			/****/
			const value = await readContract(
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
			[$project.distributionLimit, $project.distributionLimitCurrency] = await readContract(
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
			$project.usedDistributionLimit = await readContract(
				V2ContractName.JBSingleTokenPaymentTerminalStore,
				'usedDistributionLimitOf',
				$project.primaryTerminal && $project.projectId && $project.fundingCycle?.number
					? [$project.primaryTerminal, $project.projectId, $project.fundingCycle?.number]
					: null
			);

			/****/

			const owner = await readContract(
				V2ContractName.JBProjects,
				'ownerOf',
				$project.projectId ? [BigNumber.from($project.projectId).toHexString()] : null
			);

			$project.projectOwnerAddress = owner;

			const ETHBalance = await readContract(
				V2ContractName.JBSingleTokenPaymentTerminalStore,
				'balanceOf',
				$project.primaryTerminal && $project.projectId
					? [$project.primaryTerminal, $project.projectId]
					: null
			);

			// if ETH, no conversion necessary
			if (BigNumber.from($project.distributionLimitCurrency)?.eq(V2_CURRENCY_USD)) {
				const converter = getCurrencyConverter();
				$project.balanceInDistributionLimitCurrency = converter.wadToCurrency(
					BigNumber.from(ETHBalance),
					V2CurrencyName(
						BigNumber.from($project.distributionLimitCurrency)?.toNumber() as V2CurrencyOption
					),
					V2CurrencyName(Currency.ETH as V2CurrencyOption)
				);
			} else {
				$project.balanceInDistributionLimitCurrency = BigNumber.from(ETHBalance);
			}

			loading = false;
		} catch (e) {
			console.log(e);
			issue = e.message;
		}

		// TODO probably need to go through above and figure out appropiate error messages on
		// a per stage basis
		if (isNewDeploy) {
			openModal(NextSteps);
		}
	});
</script>

<section>
	<div class="content">
		{#if issue}
			<Issue center>
				{issue}
			</Issue>
		{:else if loading}
			<Loading height={500} />
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
		height: 100%;
		max-width: 1080px;
		margin: 0px auto;
		padding: 20px;
		width: 100%;
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

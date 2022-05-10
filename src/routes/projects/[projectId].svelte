<script lang="ts" context="module">
	import { browser } from '$app/env';
	export const hydrate = true;
	export const router = browser;
	export const prerender = true;
</script>

<script lang="ts">
	import type { BigNumber } from 'ethers';
	import Head from '$lib/project/Head.svelte';
	import Stats from '$lib/project/Stats.svelte';
	import Details from '$lib/project/Details.svelte';
	import Activity from '$lib/project/Activity.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Paid from '$lib/project/Paid.svelte';
	import { onMount, setContext } from 'svelte';
	import { querySubgraph } from '$utils/graph';
	import Store from '$utils/Store';
	import type { Project } from '$models/subgraph-entities/project';
	import type { V1FundingCycle } from '$models/v1/fundingCycle';
	import { getTerminalName, getTerminalVersion } from '$utils/v1/terminals';
	import { V1CurrencyName } from '$utils/v1/currency';

	import { page } from '$app/stores';
	import type { ProjectMetadata, ProjectMetadataV4 } from '$models/project-metadata';
	import { getPaymentsForProject, getProjectMetadata } from '$data/project';
	import { getCurrencyConverter } from '$data/currency';
	import { project as mockProject } from '$data/mockDataV2';
	import type { V2ProjectContextType } from '$models/project-type';

	let project = new Store<V2ProjectContextType>();

	const converter = getCurrencyConverter();

	let loading = true;
	setContext('PROJECT', project);
	// 	// Calls JBFundingCycleStore.currentOf
	// 	const { data: fundingCycle, loading: fundingCycleLoading } =
	//     useProjectCurrentFundingCycle({
	//       projectId,
	//     })

	//   const fundingCycleMetadata = fundingCycle
	//     ? decodeV2FundingCycleMetadata(fundingCycle?.metadata)
	//     : undefined

	//   const { data: payoutSplits } = useProjectSplits({
	//     projectId,
	//     splitGroup: ETH_PAYOUT_SPLIT_GROUP,
	//     domain: fundingCycle?.configuration?.toString(),
	//   })

	//   const { data: terminals } = useProjectTerminals({
	//     projectId,
	//   })

	//   const location = useLocation()
	//   const params = new URLSearchParams(location.search)
	//   const isNewDeploy = Boolean(params.get('newDeploy'))

	//   const primaryTerminal = terminals?.[0] // TODO: make primaryTerminalOf hook and use it

	//   const { data: distributionLimitData, loading: distributionLimitLoading } =
	//     useProjectDistributionLimit({
	//       projectId,
	//       configuration: fundingCycle?.configuration?.toString(),
	//       terminal: primaryTerminal,
	//     })

	//   const { data: usedDistributionLimit, loading: usedDistributionLimitLoading } =
	//     useUsedDistributionLimit({
	//       projectId,
	//       terminal: primaryTerminal,
	//       fundingCycleNumber: fundingCycle?.number,
	//     })

	//   const [distributionLimit, distributionLimitCurrency] =
	//     distributionLimitData ?? []

	//   const { data: reservedTokensSplits } = useProjectSplits({
	//     projectId,
	//     splitGroup: RESERVED_TOKEN_SPLIT_GROUP,
	//     domain: fundingCycle?.configuration?.toString(),
	//   })

	//   const { data: ETHBalance, loading: ETHBalanceLoading } =
	//     usePaymentTerminalBalance({
	//       terminal: primaryTerminal,
	//       projectId,
	//     })

	//   const { data: tokenAddress } = useProjectToken({
	//     projectId,
	//   })

	//   const tokenSymbol = useSymbolOfERC20(tokenAddress)

	//   const { data: primaryTerminalCurrentOverflow } = useTerminalCurrentOverflow({
	//     projectId,
	//     terminal: primaryTerminal,
	//   })

	//   const converter = useCurrencyConverter()
	//   const {
	//     data: balanceInDistributionLimitCurrency,
	//     loading: balanceInDistributionLimitCurrencyLoading,
	//   } = useMemo(() => {
	//     if (ETHBalanceLoading) return { loading: true }

	//     return {
	//       data: converter.wadToCurrency(
	//         ETHBalance,
	//         V2CurrencyName(
	//           distributionLimitCurrency?.toNumber() as V2CurrencyOption,
	//         ),
	//         V2CurrencyName(V2_CURRENCY_ETH),
	//       ),
	//       loading: false,
	//     }
	//   }, [ETHBalance, ETHBalanceLoading, converter, distributionLimitCurrency])

	//   const { data: projectOwnerAddress } = useProjectOwner(projectId)

	//   const { data: totalTokenSupply } = useProjectTokenTotalSupply(projectId)

	//   const { data: ballotState } = useBallotState(projectId)

	//   if (metadataLoading || metadataURILoading) return <Loading />
	//   if (isNewDeploy && !metadataCID) {
	//     return <NewDeployNotAvailable handleOrId={projectId} />
	//   }
	//   if (metadataError || !metadataCID) {
	//     return <Project404 projectId={projectId} />
	//   }

	//   const project: V2ProjectContextType = {
	//     projectId,
	//     projectMetadata,
	//     fundingCycle,
	//     fundingCycleMetadata,
	//     distributionLimit,
	//     usedDistributionLimit,
	//     payoutSplits,
	//     reservedTokensSplits,
	//     tokenAddress,
	//     terminals,
	//     primaryTerminal,
	//     ETHBalance,
	//     distributionLimitCurrency,
	//     balanceInDistributionLimitCurrency,
	//     tokenSymbol,
	//     projectOwnerAddress,
	//     primaryTerminalCurrentOverflow,
	//     totalTokenSupply,
	//     ballotState,

	//     loading: {
	//       ETHBalanceLoading,
	//       balanceInDistributionLimitCurrencyLoading,
	//       distributionLimitLoading,
	//       fundingCycleLoading,
	//       usedDistributionLimitLoading,
	//     },
	//   }
	onMount(async () => {
		const [res] = await querySubgraph({
			entity: 'project',
			keys: [
				'id',
				'handle',
				'createdAt',
				'creator',
				'uri',
				'currentBalance',
				'distributeToPayoutModEvents',
				'totalPaid',
				'totalRedeemed'
			],
			where: [
				{
					key: 'id',
					value: $page.params.projectId
				}
			]
		});
		$project = mockProject;
		loading = false;
	});
</script>

<section>
	<div class="content">
		{#if loading}
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
					{#await getPaymentsForProject($project.projectId)}
						<Activity loading={true} />
					{:then payEvents}
						<Activity {payEvents} />
					{/await}
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

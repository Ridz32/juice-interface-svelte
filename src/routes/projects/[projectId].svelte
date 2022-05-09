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
	import {
		mockBalanceInCurrency,
		mockBalance,
		mockOwner,
		mockOverflow,
		mockTokenSymbol,
		currentFundingCycle,
		mockTokenAddress
	} from '$data/mockData';

	let project = new Store<Project>();
	let metadata = new Store<ProjectMetadata>();
	// TODO populate current funding cycle from the contract
	let currentFC = new Store<V1FundingCycle>();
	let balance = new Store<BigNumber>();
	let balanceInCurrency = new Store<BigNumber>();
	let overflow = new Store<BigNumber>();
	let owner = new Store<Address>();
	let tokenSymbol = new Store<string>();
	let tokenAddress = new Store<string>();

	// TODO get the url params
	//   const { handle }: { handle?: string } = useParams()
	// 	 const location = useLocation()
	//   const params = new URLSearchParams(location.search)
	//   const isNewDeploy = Boolean(params.get('newDeploy'))
	// NOTE we already have the project id in our current setup
	// should add a [projectHandle].svelte route for handle
	//   const projectId = useProjectIdForHandle(handle)

	// TODO get all the below data from the contracts, all these hooks are from '/hooks/v1/contractReader'
	// make functions in data directory
	//   const owner = useOwnerOfProject(projectId)
	//   const terminalAddress = useTerminalOfProject(projectId)
	//   const terminalName = getTerminalName({
	// 	   address: terminalAddress,
	//   })
	//   const terminalVersion = getTerminalVersion(terminalAddress)
	//   const currentFC = useCurrentFundingCycleOfProject(projectId, terminalName)
	//   const queuedFC = useQueuedFundingCycleOfProject(projectId)
	//   const currentPayoutMods = useCurrentPayoutModsOfProject(
	//     projectId,
	//     currentFC?.configured,
	//   )
	//   const queuedPayoutMods = useQueuedPayoutModsOfProject(
	//     projectId,
	//     queuedFC?.configured,
	//   )
	//   const currentTicketMods = useCurrentTicketModsOfProject(
	//     projectId,
	//     currentFC?.configured,
	//   )
	//   const queuedTicketMods = useQueuedTicketModsOfProject(
	//     projectId,
	//     queuedFC?.configured,
	//   )
	//   const tokenAddress = useTokenAddressOfProject(projectId)
	//   const tokenSymbol = useSymbolOfERC20(tokenAddress)

	//   const balance = useBalanceOfProject(projectId, terminalName)

	const converter = getCurrencyConverter();
	// const balanceInCurrency =
	// 	balance &&
	// 	converter.wadToCurrency(
	// 		balance,
	// 		V1CurrencyName(currentFC?.currency.toNumber() as V1CurrencyOption),
	// 		'ETH'
	// 	);

	//   const overflow = useOverflowOfProject(projectId, terminalName)
	//   const uri = useUriOfProject(projectId)

	async function getMockCurrentFC() {
		// Copied from console logging in jb react
		return new Promise((resolve, reject) => resolve(currentFundingCycle));
	}
	let loading = true;
	setContext('PROJECT', {
		project,
		metadata,
		currentFC,
		balance,
		balanceInCurrency,
		overflow,
		owner,
		tokenSymbol,
		tokenAddress
	});

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

		$project = res;
		console.log(res);
		$metadata = await getProjectMetadata(res.uri);
		$project.payEvents = await getPaymentsForProject(res.id);
		$currentFC = currentFundingCycle;
		$balanceInCurrency = mockBalanceInCurrency;
		$balance = mockBalance;
		$overflow = mockOverflow;
		$owner = mockOwner;
		$tokenSymbol = mockTokenSymbol;
		$tokenAddress = mockTokenAddress;

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
					<Activity {loading} />
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

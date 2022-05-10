<script lang="ts">
	import { setContext } from 'svelte';
	import { modal } from '$stores';
	import { BigNumber } from '@ethersproject/bignumber';
	import * as constants from '@ethersproject/constants';
	import { redemptionRateFrom } from '$utils/v2/math';
	import Store from '$utils/Store';
	import type { V2ProjectContextType } from '$models/project-type';

	import { Tab, Tabs, TabList, TabPanel } from './Tabs';
	import Button from '$lib/components/Button.svelte';
	import FundingCycle from './FundingCycle';
	import Preview from './Preview';
	import ProjectDetails from './ProjectDetails.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { connectedAccount, walletConnect } from '$stores/web3';
	import { readNetwork } from '$constants/networks';
	import { uploadProjectMetadata } from '$utils/ipfs';
	import { DEFAULT_BALLOT_STRATEGY } from '$constants/v2/ballotStrategies';
	import { Currency, CurrencyValue } from '$constants';
	import { contracts, transactContract } from '$utils/web3/contractReader';
import { V2ContractName } from '$models/v2/contracts';
import { JUICEBOX_MONEY_METADATA_DOMAIN } from '$constants/v2/metadataDomain';

	let project = new Store<V2ProjectContextType>();
	// Populate project with default data
	project.set({
		projectId: undefined,
		isPreviewMode: false,
		projectMetadata: {
			version: 4,
			name: '',
			description: '',
			infoUri: '',
			logoUri: '',
			twitter: '',
			discord: '',
			tokens: [],
			payButton: 'Pay',
			payDisclosure: ''
		},
		fundingCycleMetadata: {
			reservedRate: BigNumber.from(0), // A number from 0-10,000
			redemptionRate: redemptionRateFrom('100'), // A number from 0-10,000
			ballotRedemptionRate: redemptionRateFrom('100'), // A number from 0-10,000
			pausePay: false,
			pauseDistributions: false,
			pauseRedeem: false,
			allowMinting: false,
			pauseBurn: false,
			allowChangeToken: false,
			allowTerminalMigration: false,
			allowControllerMigration: false,
			allowSetTerminals: false,
			allowSetController: false,
			holdFees: false,
			useTotalOverflowForRedemptions: false,
			useDataSourceForPay: false,
			useDataSourceForRedeem: false,
			dataSource: constants.AddressZero
		},

		fundingCycle: {
			duration: BigNumber.from(0),
			weight: BigNumber.from('0xd3c21bcecceda1000000'),
			discountRate: BigNumber.from(0),
			// TODO ballot, look at hooks/v2/V2ContractLoader.ts for more info
			// ballot: contracts?.JBETHPaymentTerminal.address ?? '', // hex, contract address
			ballot: DEFAULT_BALLOT_STRATEGY.address,

			number: BigNumber.from(1),
			configuration: BigNumber.from(0),
			basedOn: BigNumber.from(0),
			start: BigNumber.from(Date.now()).div(1000),
			metadata: BigNumber.from(0)
		},
		payoutSplits: [],
		reservedTokensSplits: [],
		distributionLimit: BigNumber.from(0),
		distributionLimitCurrency: CurrencyValue[Currency.ETH]?.toNumber(),

		tokenAddress: undefined,
		tokenSymbol: undefined,
		terminals: undefined,
		primaryTerminal: undefined,
		ETHBalance: undefined,
		projectOwnerAddress: undefined,
		balanceInDistributionLimitCurrency: undefined,
		usedDistributionLimit: undefined,
		ballotState: undefined,
		primaryTerminalCurrentOverflow: undefined,
		totalTokenSupply: undefined,
		loading: undefined
	});

	setContext('PROJECT', project);

	let isReviewPanel = false;
	function checkReview(tabId: string) {
		isReviewPanel = tabId === 'review';
	}

	function onClick(tabId: string) {
		document.getElementById(tabId).click();
		window.scrollTo(0, 0);
	}

	let loading = false;

	async function deployProject() {
		console.log('Start serializing');
		// loading = true;
		console.log('fundingCycle', $project.fundingCycle);
		console.log('projectMetadata', $project.projectMetadata);
		console.log('fundingCycleMetadata', $project.fundingCycleMetadata);
		console.log('payoutSplits', $project.payoutSplits);
		console.log('reservedTokensSplits', $project.reservedTokensSplits);
		const uploadedMetadata = await uploadProjectMetadata(
			$project.projectMetadata,
			$project.projectMetadata.name.toLowerCase().replace(/[^\w]+/g, '_')
		);
		console.log('uploadedMetadata', uploadedMetadata);
		if (!uploadedMetadata.IpfsHash) {
			loading = false;
			return;
		}

		// projectMetadataCID: string
		// fundingCycleData: V2FundingCycleData
		// fundingCycleMetadata: V2FundingCycleMetadata
		// fundAccessConstraints: V2FundAccessConstraint[]
		// groupedSplits?: GroupedSplits<SplitGroup>[]
		// mustStartAtOrAfter?: string

		// const args = [
		// 	$connectedAccount, // _owner
		// 	[uploadedMetadata.IpfsHash, JUICEBOX_MONEY_METADATA_DOMAIN], // _projectMetadata (JBProjectMetadata)
		// 	{
		// 		duration: $project.fundingCycle.duration,
		// 		weight: $project.fundingCycle.weight,
		// 		discountRate: $project.fundingCycle.discountRate,
		// 		ballot: $project.fundingCycle.ballot,
		// 	}, // _data (JBFundingCycleData)
		// 	$project.fundingCycleMetadata, // _metadata (JBFundingCycleMetadata)
		// 	'1', // _mustStartAtOrAfter DEFAULT
		// 	groupedSplits, // _groupedSplits,
		// 	$project.fundAccessConstraints, // _fundAccessConstraints,
		// 	[contracts.JBETHPaymentTerminal.address], //  _terminals (contract address of the JBETHPaymentTerminal)
		// 	DEFAULT_MEMO
		// ];

		// return transactContract(V2ContractName.JBController, 'launchProjectFor', args);

		// const groupedSplits = [payoutGroupedSplits, reservedTokensGroupedSplits];

		// const txSuccessful = await launchProjectTx(
		// 	{
		// 		projectMetadataCID: uploadedMetadata.IpfsHash,
		// 		fundingCycleData,
		// 		fundingCycleMetadata,
		// 		fundAccessConstraints,
		// 		groupedSplits
		// 	},
		// 	{
		// 		onDone() {
		// 			console.info('Transaction executed. Awaiting confirmation...');
		// 			setTransactionPending(true);
		// 		},
		// 		async onConfirmed(result) {
		// 			const txHash = result?.transaction?.hash;
		// 			if (!txHash) {
		// 				return; // TODO error notififcation
		// 			}

		// 			const txReceipt = await findTransactionReceipt(txHash);
		// 			if (!txReceipt) {
		// 				return; // TODO error notififcation
		// 			}
		// 			console.info('Found tx receipt.');

		// 			const projectId = getProjectIdFromReceipt(txReceipt);
		// 			if (projectId === undefined) {
		// 				return; // TODO error notififcation
		// 			}

		// 			// Reset Redux state/localstorage after deploying
		// 			dispatch(editingV2ProjectActions.resetState());

		// 			history.push(`/v2/p/${projectId}?newDeploy=true`);
		// 		},
		// 		onCancelled() {
		// 			setDeployLoading(false);
		// 			setTransactionPending(false);
		// 		}
		// 	}
		// );

		// if (!txSuccessful) {
		// 	setDeployLoading(false);
		// 	setTransactionPending(false);
		// }
	}

	let disabled = true;

	$: disabled = !$project.projectMetadata.name;
</script>

<div id="create">
	<h1>Design your project 🎨</h1>
	<Tabs>
		<TabList>
			<Tab id="details" onClick={checkReview}>1. Project details</Tab>
			<Tab id="funding" onClick={checkReview}>2. Funding cycle</Tab>
			<Tab id="review" onClick={checkReview}>3. Review and deploy</Tab>
		</TabList>
		<div class="row">
			<section class={isReviewPanel && 'collapse'}>
				<TabPanel>
					<ProjectDetails />
					<Button on:click={() => onClick('funding')}>Next: Funding cycle</Button>
				</TabPanel>
				<TabPanel>
					<FundingCycle />
					<Button on:click={() => onClick('review')}>Next: Review and deploy</Button>
				</TabPanel>
			</section>
			<section class:full={isReviewPanel}>
				{#if isReviewPanel}
					<h2>Review project configuration</h2>
				{/if}
				<Preview />
				{#if isReviewPanel}
					<Button {disabled} on:click={$connectedAccount ? deployProject : () => walletConnect()}>
						{#if $connectedAccount}
							Deploy project to {readNetwork.name}
						{:else}
							Connect wallet to deploy
						{/if}
					</Button>
				{/if}
			</section>
		</div>
	</Tabs>
</div>
<Modal show={$modal} />

<style>
	#create {
		box-sizing: content-box;
		padding: 20px 80px 80px;
		margin: 0 auto;
		margin-bottom: 40px;
		background: var(--background-l0);
		max-width: 1200px;
	}

	.row {
		display: flex;
		max-width: 1120px;
		margin-top: 40px;
		gap: 40px;
	}

	h1 {
		color: var(--primary-text);
		font-size: 28px;
		font-weight: 400;
		margin-bottom: 40px;
		margin-block-start: 0.67em;
	}

	section:first-of-type {
		flex: 0 0 42%;
		max-width: 42%;
	}
	section:first-of-type.collapse {
		display: none;
	}

	section:last-of-type {
		flex: 0 0 56%;
		max-width: 56%;
		padding-left: 40px;
		border-left: 1px solid rgba(0, 0, 0, 0.094);
	}

	section:last-of-type.full {
		border-left: none;
		margin: 0 auto;
	}

	@media (max-width: 850px) {
		#create {
			padding: 20px 20px 80px;
		}
		.row {
			flex-flow: row wrap;
		}
		section:first-of-type,
		section:last-of-type {
			flex: 0 0 100%;
			max-width: 100%;
			margin-right: 0;
		}

		section:last-of-type {
			border-left: none;
			padding-left: 0;
		}
	}
</style>

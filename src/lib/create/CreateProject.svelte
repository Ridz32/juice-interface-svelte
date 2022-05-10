<script lang="ts">
	import {
		fundingCycle,
		fundingCycleMetadata,
		payoutSplits,
		projectMetadata,
		reservedTokensSplits
	} from './stores';
	import { modal } from '$stores';
	import { Tab, Tabs, TabList, TabPanel } from './Tabs';
	import Button from '$lib/components/Button.svelte';
	import FundingCycle from './FundingCycle';
	import Preview from './Preview';
	import ProjectDetails from './ProjectDetails.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { connectedAccount, walletConnect } from '$stores/web3';
	import { readNetwork } from '$constants/networks';
	import { uploadProjectMetadata } from '$utils/ipfs';

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
		// console.log('Start serializing');

		// loading = true;

		// console.log('fundingCycle', $fundingCycle);
		// console.log('projectMetadata', $projectMetadata);
		// console.log('fundingCycleMetadata', $fundingCycleMetadata);
		// console.log('payoutSplits', $payoutSplits);
		// console.log('reservedTokensSplits', $reservedTokensSplits);

		// const uploadedMetadata = await uploadProjectMetadata(
		// 	$projectMetadata,
		// 	$projectMetadata.handle
		// );

		// if (!uploadedMetadata.IpfsHash) {
		// 	loading = false;
		// 	return;
		// }

		// deployProjectTx(
		// 	{
		// 		handle: editingProjectInfo.handle,
		// 		projectMetadataCid: uploadedMetadata.IpfsHash,
		// 		properties: {
		// 			target: editingFC.target,
		// 			currency: editingFC.currency,
		// 			duration: editingFC.duration,
		// 			discountRate: editingFC.discountRate,
		// 			cycleLimit: editingFC.cycleLimit,
		// 			ballot: editingFC.ballot
		// 		},
		// 		fundingCycleMetadata: {
		// 			reservedRate: editingFC.reserved.toNumber(),
		// 			bondingCurveRate: editingFC.bondingCurveRate.toNumber(),
		// 			reconfigurationBondingCurveRate: editingFC.bondingCurveRate.toNumber(),
		// 			payIsPaused: editingFC.payIsPaused,
		// 			ticketPrintingIsAllowed: editingFC.ticketPrintingIsAllowed,
		// 			treasuryExtension: constants.AddressZero
		// 		},
		// 		payoutMods: editingPayoutMods,
		// 		ticketMods: editingTicketMods
		// 	},
		// 	{
		// 		onDone: () => setLoadingCreate(false),
		// 		onConfirmed: () => {
		// 			setDeployProjectModalVisible(false);

		// 			// Add project dependency to metadata and logo files
		// 			editMetadataForCid(uploadedMetadata.IpfsHash, {
		// 				name: metadataNameForHandle(editingProjectInfo.handle)
		// 			});
		// 			editMetadataForCid(cidFromUrl(editingProjectInfo.metadata.logoUri), {
		// 				name: logoNameForHandle(editingProjectInfo.handle)
		// 			});

		// 			resetProjectForm();
		// 			dispatch(editingProjectActions.resetState());

		// 			window.location.hash =
		// 				'/p/' + editingProjectInfo.handle + '?newDeploy=true&feedbackModalOpen=true';
		// 		}
		// 	}
		// );
	}

	let disabled = true;

	$: disabled = !$projectMetadata.name;
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

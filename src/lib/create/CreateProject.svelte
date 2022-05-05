<script lang="ts">
	import { isReviewPanel, modal } from './stores';
	import { Tab, Tabs, TabList, TabPanel } from './Tabs';
	import Button from '$lib/components/Button.svelte';
	import FundingCycle from './FundingCycle';
	import Preview from './Preview';
	import ProjectDetails from './ProjectDetails.svelte';
	import Modal from './Modal.svelte';

	function onClick(tabId: string) {
		document.getElementById(tabId).click();
	}
</script>

<div id="create">
	<h1>Design your project 🎨</h1>
	<Tabs>
		<TabList>
			<Tab id="details">1. Project details</Tab>
			<Tab id="funding">2. Funding cycle</Tab>
			<Tab id="review">3. Review and deploy</Tab>
		</TabList>
		<div class="row">
			<section class={$isReviewPanel && 'collapse'}>
				<TabPanel>
					<ProjectDetails />
					<Button onClick={() => onClick('funding')}>Next: Funding cycle</Button>
				</TabPanel>
				<TabPanel>
					<FundingCycle />
					<Button onClick={() => onClick('review')}>Next: Review and deploy</Button>
				</TabPanel>
			</section>
			<section class={$isReviewPanel && 'full'}>
				{#if $isReviewPanel}
					<h2>Review project configuration</h2>
				{/if}
				<Preview />
				{#if $isReviewPanel}
					<Button onClick={console.log}>Connect wallet to deploy</Button>
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

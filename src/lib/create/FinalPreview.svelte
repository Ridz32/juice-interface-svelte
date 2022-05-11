<script lang="ts">
	import { getContext } from 'svelte';
	import type Store from '$utils/Store';
	import type { V2ProjectContextType } from '$models/project-type';
	import Icon from '$lib/components/Icon.svelte';
	import ProjectLogo from '$lib/components/ProjectLogo.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import PopInfo from '$lib/components/PopInfo.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { getDistributionLimitType } from '$utils/v2/distributions';
	import { getFundingCycleDetails } from '$utils/v2/fundingCycle';
	import { metadataFields } from './ProjectDetails.svelte';
	import { DistributionLimitType } from '$constants';
	import Money from '$lib/components/Money.svelte';

	const project = getContext('PROJECT') as Store<V2ProjectContextType>;

	const hasDuration = $project.fundingCycle.duration && $project.fundingCycle.duration.gt(0);

	const distributionLimitType = getDistributionLimitType($project.distributionLimit);

	const fundingCycleDetails = getFundingCycleDetails(
		$project.fundingCycle,
		$project.fundingCycleMetadata
	);

	const hiddenFCDetails = ['start', 'end'];
</script>

<section>
	<h1><Trans>Review project configuration</Trans></h1>

	<h2><Trans>Project details</Trans></h2>
	<p><Trans>These attributes can be changed at any time.</Trans></p>
	<div class="details">
		<div class="info-item">
			<h4><Trans>Name</Trans></h4>
			<ProjectLogo uri={$project.projectMetadata.logoUri} />
		</div>
		{#each metadataFields as field}
			<div class="info-item">
				<h4>{field.label}</h4>
				<p>--</p>
			</div>
		{/each}
	</div>
	<div class="fundingCycle">
		<h2><Trans>Funding cycle details</Trans></h2>
		{#if hasDuration}
			<Trans>
				These settings will <strong>not</strong> be editable immediately within a funding cycle.
				They can only be changed for{' '}
				<strong>upcoming</strong> funding cycles according to your{' '}
				<strong>reconfiguration rules</strong>.
			</Trans>
		{:else}
			<Trans>
				Since you have not set a funding duration, changes to these settings will be applied
				immediately.
			</Trans>
		{/if}
		<div class="details">
			<div class="distributionLimit">
				<!-- <div class="info-item"> -->
				<h4>
					<Trans>Distribution Limit</Trans>
					<Popover
						placement="right"
						message="The maximum amount of funds allowed to be distributed from the project's treasury each funding cycle."
					>
						<Icon name="questionCircle" />
					</Popover>
				</h4>
				<p>
					{#if distributionLimitType === DistributionLimitType.None}
						<Trans>
							Distribution limit is 0: All funds will be considered overflow and can be redeemed by
							token holders.
						</Trans>
					{:else if distributionLimitType === DistributionLimitType.Infinite}
						<Money
							currency={$project.distributionLimitCurrency}
							amount={$project.distributionLimit}
						/>
					{:else}
						<Trans>
							Distribution limit is infinite: The project will control how all funds are
							distributed, and none can be redeemed by token holders.
						</Trans>
					{/if}
				</p>
				<!-- </div> -->
			</div>
			<!-- TODO discount rate and redemption rate aren't shown when no funding cycle duration -->
			{#each fundingCycleDetails as detail}
				{#if !hiddenFCDetails.includes(detail.id)}
					<div class="info-item">
						<h4><Trans>{detail.label}</Trans></h4>
						<p>{detail.value}</p>
					</div>
				{/if}
			{/each}
			<!-- <div class="info-item">
                <h4><Trans>Duration</Trans></h4>
                <p>Not set</p>
            </div>
            <div class="info-item">
                <h4><Trans>Reserved tokens</Trans></h4>
                <p>Not set</p>
            </div>
            <div class="info-item">
                <h4><Trans>Initial issuace rate</Trans></h4>
                <p>Not set</p>
            </div>
            <div class="info-item">
                <h4><Trans>Duration</Trans></h4>
                <p>Not set</p>
            </div> -->
		</div>
	</div>
</section>

<style>
	h1,
	h2,
	h4 {
		color: var(--text-header);
	}

	h2 {
		margin-top: 3rem;
	}

	p {
		font-weight: 300;
	}

	.details {
		display: grid;
        grid-auto-rows: auto;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-row-gap: 40px;
        grid-column-gap: 40px;

        /* auto wrap rows when overflow */
        grid-auto-flow: row;
	}

	.distributionLimit {
		margin-top: 20px;
		grid-column: span 3;
	}

	.distributionLimit p {
		font-size: 18px;
		font-weight: 400;
	}

	.distributionLimit h4 {
		margin: 0;
		color: var(--text-header);
	}

	.info-item {
	}

</style>

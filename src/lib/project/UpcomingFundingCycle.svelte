<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { project } from '$data/mockDataV2';
	import Icon from '$lib/components/Icon.svelte';
	import HeavyBorderBox from '$lib/components/HeavyBorderBox.svelte';
	import FundingCycleDetails from '$lib/components/FundingCycleDetails.svelte';
	import PayoutSplits from '$lib/components/PayoutSplits.svelte';
	import ReservedTokenSplits from '$lib/components/ReservedTokenSplits.svelte';
	import { BigNumber } from 'ethers';

	// TODO contract reader
	// const { projectId, primaryTerminal } = useContext(V2ProjectContext);

	// const { data: queuedFundingCycleResponse, loading: queuedFundingCycleLoading } =
	// 	useProjectQueuedFundingCycle({
	// 		projectId
	// 	});

	// const [queuedFundingCycle, queuedFundingCycleMetadata] = queuedFundingCycleResponse || [];

	// const { data: queuedPayoutSplits } = useProjectSplits({
	// 	projectId,
	// 	splitGroup: ETH_PAYOUT_SPLIT_GROUP,
	// 	domain: queuedFundingCycle?.configuration?.toString()
	// });

	// const { data: queuedReservedTokensSplits } = useProjectSplits({
	// 	projectId,
	// 	splitGroup: RESERVED_TOKEN_SPLIT_GROUP,
	// 	domain: queuedFundingCycle?.configuration?.toString()
	// });

	// const { data: queuedDistributionLimitData } = useProjectDistributionLimit({
	// 	projectId,
	// 	configuration: queuedFundingCycle?.configuration.toString(),
	// 	terminal: primaryTerminal
	// });
	// const [queuedDistributionLimit, queuedDistributionLimitCurrency] =
	// 	queuedDistributionLimitData ?? [];

	// if (queuedFundingCycleLoading || !queuedFundingCycle) return <LoadingOutlined />;

	// const queuedReservedRate = queuedFundingCycleMetadata?.reservedRate;

	// MOCK DATA until above is done
	let loading = true;
	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 2000);
	});

	const queuedFundingCycle = project.fundingCycle;
	queuedFundingCycle.number = BigNumber.from(2);
	const queuedFundingCycleMetadata = project.fundingCycleMetadata;
	const queuedPayoutSplits = project.payoutSplits;
	const queuedReservedTokensSplits = project.reservedTokensSplits;
	const queuedDistributionLimit = project.distributionLimit;
	const queuedDistributionLimitCurrency = project.distributionLimitCurrency;
</script>

{#if loading}
	<HeavyBorderBox>
		<p>
			<Icon name="loading" spin />
		</p>
	</HeavyBorderBox>
{:else}
	<div in:fade>
		<HeavyBorderBox>
			<FundingCycleDetails
				fundingCycle={queuedFundingCycle}
				fundingCycleMetadata={queuedFundingCycleMetadata}
				distributionLimit={queuedDistributionLimit}
				currentDistributionLimitCurrencyType={queuedDistributionLimitCurrency}
			/>
		</HeavyBorderBox>
		<HeavyBorderBox>
			<PayoutSplits
				currency={queuedDistributionLimitCurrency}
				distributionLimit={queuedDistributionLimit}
				payoutSplits={queuedPayoutSplits}
				hideHeader={true}
			/>
		</HeavyBorderBox>
		<HeavyBorderBox>
			<ReservedTokenSplits
				fundingCycleMetadata={queuedFundingCycleMetadata}
				reservedTokensSplits={queuedReservedTokensSplits}
				hideHeader={true}
			/>
		</HeavyBorderBox>
	</div>
{/if}

<style>
	p {
		color: var(--text-header);
		font-size: 2rem;
		text-align: center;
	}
</style>

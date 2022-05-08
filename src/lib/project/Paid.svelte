<script lang="ts">
	import { getContext } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import ETHAmount from '$lib/components/ETHAmount.svelte';
	import USDAmount from '$lib/components/USDAmount.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import { readNetwork } from '$constants/networks';
	import { V1_CURRENCY_ETH, V1_CURRENCY_USD } from '$constants/v1/currency';
	import { getCurrencyConverter } from '$data/currency';
	import type { V1CurrencyOption } from '$models/v1/currencyOption';
	import type { Project } from '$models/subgraph-entities/project';
	import type { ProjectMetadata, ProjectMetadataV4 } from '$models/project-metadata';
	import { getEthBalance } from '$data/eth';
	import { V1CurrencyName } from '$utils/v1/currency';
	import { hasFundingTarget } from '$utils/v1/fundingCycle';
	import type Store from '$utils/Store';
	import type { V1FundingCycle } from '$models/v1/fundingCycle';


	const converter = getCurrencyConverter();

	const projectsContext = getContext('PROJECT') as {
		project: Store<Project>;
		metadata: Store<ProjectMetadataV4>;
		currentFC: Store<V1FundingCycle>;
		balance: Store<number>;
		balanceInCurrency: Store<number>;
		overflow: Store<number>;
		owner: Store<string>;
		currency: Store<V1CurrencyOption>;
	};
	const project = projectsContext.project;
	const currentFC = projectsContext.currentFC;
	const balanceInCurrency = projectsContext.balanceInCurrency;
	const balance = projectsContext.balance;
	const overflow = projectsContext.overflow;
	const owner = projectsContext.owner;

	const ownerBalance = getEthBalance($owner);

	const overflowInCurrency = converter.wadToCurrency(
		$overflow ?? 0,
		V1CurrencyName($currentFC?.currency.toNumber() as V1CurrencyOption),
		'ETH'
	);
</script>

{#if !$currentFC}
	<div />
{/if}

<InfoSpaceBetween>
	<div slot="left">
		<h4>Volume</h4>
		<Popover
			placement="right"
			message="The total amount received by this project through Juicebox since it was created."
		>
			<Icon name="questionCircle" />
		</Popover>
	</div>
	<div slot="right">
		<div class="amount">
			<ETHAmount amount={$project.totalPaid} precision={4} />
		</div>
	</div>
</InfoSpaceBetween>
<InfoSpaceBetween>
	<div slot="left">
		<h4>In Juicebox</h4>
		<Popover placement="right" message="The balance of this project in the Juicebox contract.">
			<Icon name="questionCircle" />
		</Popover>
	</div>
	<div slot="right">
		<div class="amount">
			{#if $currentFC.currency.eq(V1_CURRENCY_ETH)}
				<h4 class="amount-main">
					<ETHAmount amount={$balance} precision={2} padEnd />
				</h4>
			{:else}
				<span class="amount-sub">
					<ETHAmount amount={$balance} precision={2} padEnd />
				</span>
				<h4 class="amount-main">
					<USDAmount amount={$balanceInCurrency} precision={2} padEnd />
				</h4>
			{/if}
		</div>
	</div>
</InfoSpaceBetween>
{#if hasFundingTarget($currentFC)}
	<InfoSpaceBetween>
		<div slot="left">
			<h4><Trans>Distributed</Trans></h4>
			<Popover
				placement="right"
				message="The amount that has been distributed from the Juicebox balance
            in this funding cycle, out of the current funding target. No
            more than the funding target can be distributed in a single
            funding cycle—any remaining ETH in Juicebox is overflow, until
            the next cycle begins."
			>
				<Icon name="questionCircle" />
			</Popover>
		</div>
	</InfoSpaceBetween>
{/if}

<style>
	div[slot='left'],
	div[slot='right'] {
		display: flex;
		align-items: baseline;
		gap: 20px;
		text-transform: uppercase;
	}

	div[slot='left'],
	div[slot='left'] h4 {
		color: var(--text-tertiary);
	}

	.amount {
		color: var(--text-secodary);
		font-size: 1rem;
	}

	.amount-main {
		color: var(--text-header);
		font-size: 1rem;
		display: inline;
	}

	.amount-sub {
		font-size: 0.75rem;
		color: var(--text-tertiary);

	}
</style>

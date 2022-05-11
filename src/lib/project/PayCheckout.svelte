<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import type { BigNumber } from 'ethers';
	import type { V2ProjectContextType } from '$models/project-type';
	import type Store from '$utils/Store';
	import Input from '$lib/components/Input.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import { formatWad } from '$utils/formatNumber';
	import { weightedAmount } from '$utils/v2/math';

	const projectContext = getContext('PROJECT') as Store<V2ProjectContextType>;

	export let weiAmount: BigNumber;

	const project = $projectContext;
	const metadata = $projectContext.projectMetadata;
	const fundingCycle = $projectContext.fundingCycle;
	const fundingCycleMetadata = $projectContext.fundingCycleMetadata;

	$: amountString = formatWad(weiAmount);
	// TODO we need to prepend memo with something to align with the snapshot
	// re decentralisation
	let memo: string;
	let checked = false;
	let receivedTickets: string;
	let ownerTickets: string;

	onMount(() => {
        // TODO there's something weird here with the reserved rate
        // PLS HELP, I CANNOT FIGURE OUT WHAT IS GOING ON
		receivedTickets = weightedAmount(
			fundingCycle?.weight,
			fundingCycleMetadata.reservedRate.toNumber(),
			weiAmount,
			'payer'
		);
		ownerTickets = weightedAmount(
			fundingCycle?.weight,
			fundingCycleMetadata.reservedRate.toNumber(),
			weiAmount,
			'reserved'
		);
	});
</script>

<main>
	<h3><Trans>Pay {project.tokenSymbol || ''}</Trans></h3>
	<p>
		<Trans
			>Paying <b>{project.tokenSymbol || ''}</b> is not an investment — it's a way to support the
			project. Any value or utility of the tokens you receive is determined by {metadata.name}.</Trans
		>
	</p>

	{#if metadata.payDisclosure}
		<h4>Notice from {project.tokenSymbol}:</h4>
		<p>{metadata.payDisclosure}</p>
	{/if}
	<!-- TODO add the riskcount here -->
	<table>
		<tbody
			><tr
				><th colspan="1"><span>Pay amount</span></th><td colspan="1"><span>{amountString}</span></td
				></tr
			><tr
				><th colspan="1"><span>Tokens for you</span></th><td colspan="1"
					><span
						><div>{formatWad(receivedTickets, { precision: 0 })}</div>
						<div /></span
					></td
				></tr
			><tr
				><th colspan="1"><span>{project.tokenSymbol || 'Tokens'} reserved</span></th><td colspan="1"
					><span>{formatWad(ownerTickets, { precision: 0 })}</span></td
				></tr
			></tbody
		>
	</table>
	<label for="memo">Memo</label>
	<Input bind:value={memo} placeholder="(Optioal) Add a memo to this payment on-chain" />

	<div class="beneficiary">
		<p>Custom token beneficiary</p>
		<Toggle bind:checked />
	</div>
	<small>Mint tokes to a custom address.</small>
</main>

<style>
	h3,
	h4 {
		color: var(--text-header);
	}
	main {
		padding: 1rem;
		max-width: 750px;
	}
	table {
		width: 100%;
		margin: 20px 0px;
	}
	tbody,
	tr {
		border: 1px solid var(--stroke-primary);
	}
	th {
		font-weight: 600;
		text-align: left;
		color: var(--text-secondary);
		border-right: 1px solid var(--stroke-primary);
	}
	td {
		font-weight: 300;
		text-align: right;
	}

	th,
	td {
		padding: 12px 18px;
	}

	p {
		margin: 0;
	}
	.beneficiary {
		display: flex;
		margin-top: 1rem;
		/* font-weight: 300; */
	}
	.beneficiary p {
		margin-right: 10px;
	}
</style>

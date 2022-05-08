<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getProjects } from '$data/project';
	import { querySubgraph } from '$utils/graph';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import ETHAmount from '$lib/components/ETHAmount.svelte';
	import { formatHistoricalDate } from '$utils/formatDate';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';
	import Trans from '$lib/components/Trans.svelte';

	async function getLatestPayments() {
		return await querySubgraph({
			entity: 'payEvent',
			keys: [
				'amount',
				'beneficiary',
				'note',
				'timestamp',
				'id',
				{ entity: 'project', keys: ['id'] }
			],
			first: 20,
			orderDirection: 'desc',
			orderBy: 'timestamp'
		});
	}
</script>

<section>
	<div class="left">
		<h1><Trans>Projects using Juicebox</Trans></h1>
		{#await getProjects({ pageSize: 4 })}
			<Icon name="loading" spin={true} />
		{:then projects}
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		{:catch error}
			<p style="color: var(--text-failure)">{error}</p>
		{/await}
	</div>
	<div class="right">
		<h1 style=""><Trans>Latest Payments</Trans></h1>
		{#await getLatestPayments()}
			<Icon name="loading" spin={true} />
		{:then payments}
			{#each payments as payment}
				<div class="payment">
					<InfoSpaceBetween>
						<div slot="left">
							<!-- TODO should be project handle -->
							<p><b>@{payment.project.id}</b></p>
							<ETHAmount amount={payment.amount} precision={4} />
						</div>
						<div slot="right">
							<p class="timestamp">
								{payment.timestamp && formatHistoricalDate(payment.timestamp * 1000)}
							</p>
							<!-- TODO formatted address with ENS, look at FormattedAddress.tsx -->
							<p class="address">{getTruncatedAddress(payment.beneficiary)}</p>
						</div>
					</InfoSpaceBetween>
				</div>
			{/each}
		{/await}
	</div>
</section>

<style>
	section {
		display: flex;
		max-width: 1200px;
		margin: auto;
		flex-wrap: wrap;
	}
	h1 {
		color: var(--text-header);
		font-weight: 600;
	}

	div.left {
		margin-left: 40px;
		flex: 0 0 35%;
	}

	div.right {
		margin-left: 80px;
		max-height: 600px;
		overflow: auto;
		flex: 0 0 45%;
	}

	p {
		margin: 0;
		font-weight: 500;
	}

	.timestamp {
		color: var(--text-secondary);
		font-size: 0.7rem;
		font-weight: 300;
	}

	.payment {
		padding-top: 10px;
		margin-bottom: 10px;
		padding-bottom: 20px;
		border-bottom: 1px solid var(--stroke-tertiary);
	}

	@media (max-width: 850px) {
		div.left,
		div.right {
			margin-left: 0;
			flex: 0 0 100%;
		}

		div.right {
			padding: 20px;
		}
	}
</style>

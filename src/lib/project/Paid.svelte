<script lang="ts">
	import { getContext } from 'svelte';
	import { modal } from '$stores';
	import type { V2ProjectContextType } from '$models/project-type';
	import { Currency } from '$constants';
	import { getEthBalance } from '$data/eth';
	import type Store from '$utils/Store';
	import Icon from '$lib/components/Icon.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import ETHAmount from '$lib/components/ETHAmount.svelte';
	import USDAmount from '$lib/components/USDAmount.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import EtherscanLink from '$lib/components/EtherscanLink.svelte';
	import Modal, { bind, openModal } from '$lib/components/Modal.svelte';
	import Pay from '$lib/components/Pay.svelte';
	import PayHeadsUp from '$lib/components/PayHeadsUp.svelte';
	import PayCheckout from '$lib/project/PayCheckout.svelte';
	import { weightedAmount } from '$utils/v2/math';
	import type { BigNumber } from 'ethers';

	const projectsContext = getContext('PROJECT') as Store<V2ProjectContextType>;

	const currentFC = $projectsContext.fundingCycle;
	const fcMetadata = $projectsContext.fundingCycleMetadata;
	const balanceInCurrency = $projectsContext.balanceInDistributionLimitCurrency;
	const balance = $projectsContext.ETHBalance;
	const owner = $projectsContext.projectOwnerAddress;
	const metadata = $projectsContext.projectMetadata;
	const tokenSymbol = $projectsContext.tokenSymbol;

	const ownerBalance = getEthBalance(owner);

	async function payTreasury(weiAmount: BigNumber) {
		// TODO contract
		openModal(
			bind(PayCheckout, {
				weiAmount
			})
		);
		// setTimeout(() => {
		// 	console.warn('🛠 TODO payTreasury');
		// }, 300);
	}
</script>

{#if !currentFC}
	<div />
{/if}

<section>
	<div class="stats">
		<InfoSpaceBetween>
			<div slot="left">
				<h4>In Juicebox</h4>
				<Popover placement="right" message="The balance of this project in the Juicebox contract.">
					<Icon name="questionCircle" />
				</Popover>
			</div>
			<div slot="right">
				<div class="amount">
					{#if $projectsContext?.distributionLimitCurrency === Currency.ETH}
						<h4 class="amount-main">
							<ETHAmount amount={balanceInCurrency} precision={2} padEnd />
						</h4>
					{:else}
						<span class="amount-sub">
							<ETHAmount amount={balance} precision={2} padEnd />
						</span>
						<h4 class="amount-main">
							<USDAmount amount={balanceInCurrency} precision={2} padEnd />
						</h4>
					{/if}
				</div>
			</div>
		</InfoSpaceBetween>
		{#if $projectsContext.distributionLimit.gt(0)}
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
				<div slot="right">
					{#if $projectsContext.distributionLimitCurrency === Currency.ETH}
						<h4 class="amount-main">
							<ETHAmount amount={$projectsContext.usedDistributionLimit} precision={2} padEnd /> / <ETHAmount
								amount={$projectsContext.distributionLimit}
								precision={2}
								padEnd
							/>
						</h4>
					{:else}
						<span class="amount-sub">
							<USDAmount amount={$projectsContext.usedDistributionLimit} precision={2} padEnd /> / <USDAmount
								amount={$projectsContext.distributionLimit}
								precision={2}
								padEnd
							/>
						</span>
					{/if}
				</div>
			</InfoSpaceBetween>
			<!-- TODO range / i.e. progressbar that takes in targetAmount overflowAmountinTargetCurrency and balanceInTargetCurrency-->
			<!-- <Range showValueBox={false} /> -->
		{:else}
			<InfoSpaceBetween>
				<div slot="left" />
				<div slot="right">
					<Popover
						slot="right"
						message="The target for this funding cycle is 0, meaning all funds in Juicebox are currently
			considered overflow. Overflow can be redeemed by token holders, but not distributed."
					>
						<Trans>100% overflow</Trans>
					</Popover>
				</div>
			</InfoSpaceBetween>
		{/if}
		<!-- {/if} -->

		<InfoSpaceBetween>
			<div slot="left">
				<h4><Trans>In wallet</Trans></h4>
				<Popover placement="right" message="The balance of the project owner's wallet.">
					<EtherscanLink slot="content" value={owner} type="address" truncated />
					<Icon name="questionCircle" />
				</Popover>
			</div>
			<div slot="right">
				{#await ownerBalance}
					<p>...loading</p>
				{:then amount}
					<div class="amount-owner">
						<ETHAmount {amount} precision={2} padEnd={true} />
					</div>
				{/await}
			</div>
		</InfoSpaceBetween>

		<!-- <div class="all-assets" on:click={() => openModal(AllAssetsModal)}>
			<p><Trans>All assets</Trans> <Icon name="caret" /></p>
		</div> -->
	</div>
	<div class="payment">
		<Pay
			onClick={(weiAmount) => openModal(bind(PayHeadsUp, { click: () => payTreasury(weiAmount) }))}
			payButton={metadata.payButton}
			reservedRate={fcMetadata.reservedRate.toNumber()}
			token={tokenSymbol}
			weight={currentFC?.weight}
			weightingFn={weightedAmount}
		/>
	</div>
</section>

<Modal show={$modal} />

<style>
	section {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 10px;
	}

	.stats,
	.payment {
		flex: 0 0 48%;
	}
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

	.amount-owner {
		font-size: 1rem;
	}

	.all-assets {
		text-align: right;
		text-transform: uppercase;
		color: var(--text-tertiary);
		cursor: pointer;
	}

	@media (max-width: 850px) {
		.stats,
		.payment {
			flex: 0 0 100%;
		}
	}
</style>

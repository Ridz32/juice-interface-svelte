<script lang="ts">
	import ADDRESSES from '$constants/contracts';
	import ERC20ContractAbi from '$constants/ERC20ContractAbi';
	import StakingContractAbi from '$constants/StakingContractAbi';

	import Button from '$lib/utils/Button.svelte';
	import { chainId, connectedAccount, provider } from '$stores/web3';
	import { numberWithCommas } from '$utils/numbers';
	import { BigNumber, ethers, utils } from 'ethers';
	let inputValue = '';
	let maxBalance = '0';
	let isStaking = true;

	async function getBalance(isStaking = true) {
		maxBalance = '0';
		if (isStaking) {
			const tokenContract = new ethers.Contract(
				ADDRESSES.ETHEREUM[$chainId].TOKEN,
				ERC20ContractAbi,
				$provider
			);
			const balance = await tokenContract.balanceOf($connectedAccount);
			maxBalance = utils.formatUnits(balance, 'ether');
		} else {
			const stakingContract = new ethers.Contract(
				ADDRESSES.ETHEREUM[$chainId].STACKING,
				ERC20ContractAbi,
				$provider
			);
			const balance = await stakingContract.balanceOf($connectedAccount);
			maxBalance = utils.formatUnits(balance, 'ether');
		}
	}

	let pending = false;

	async function stake() {
		const amount = BigNumber.from(utils.parseEther(inputValue.toString() || '0'));
		if (isStaking) {
			pending = true;
			const tokenContract = new ethers.Contract(
				ADDRESSES.ETHEREUM[$chainId].TOKEN,
				ERC20ContractAbi,
				$provider.getSigner($connectedAccount)
			);
			const approveTxn = await tokenContract.approve(
				ADDRESSES.ETHEREUM[$chainId].STACKING,
				amount,
				{
					gasLimit: BigNumber.from('6000000')
				}
			);
			await approveTxn.wait();
			const stakingContract = new ethers.Contract(
				ADDRESSES.ETHEREUM[$chainId].STACKING,
				StakingContractAbi,
				$provider.getSigner($connectedAccount)
			);
			const stakeTxn = await stakingContract.enter(amount, {
				gasLimit: BigNumber.from('6000000')
			});
			await stakeTxn.wait();
			pending = false;
			inputValue = '';
		}
	}

	async function unstake() {
		const amount = BigNumber.from(utils.parseEther(inputValue.toString() || '0'));
		if (!isStaking) {
			pending = true;
			const stakingContract = new ethers.Contract(
				ADDRESSES.ETHEREUM[$chainId].STACKING,
				StakingContractAbi,
				$provider.getSigner($connectedAccount)
			);
			const unstakeTxn = await stakingContract.leave(amount, {
				gasLimit: BigNumber.from('6000000')
			});
			await unstakeTxn.wait();
			pending = false;
			inputValue = '';
		}
	}

	$: {
		$connectedAccount && getBalance(isStaking);
	}
</script>

<div class="section-wrapper">
	<div class="section">
		<h3>
			{#if isStaking}Stake{:else}Unstake{/if} ONEOF FOUNDATION DAO
		</h3>
		<p>Staking your OneOf Foundation DAO Tokens to earn yeild.</p>
		<div>
			{#if isStaking}
				<div class="field">
					<label for="amount">
						Stake Amount
						<span class="max-amount" on:click={() => (inputValue = maxBalance)}>
							(max {numberWithCommas(Number(maxBalance), 2)})
						</span>
					</label>
					<input type="number" placeholder="0.00" bind:value={inputValue} min={0} step={0.01} />
				</div>
				<div class="actions">
					<Button opacity={0.5} on:click={() => (isStaking = false)}>Unstake</Button>
					<Button widthFull on:click={stake} disabled={pending}>
						{#if pending}Staking...{:else}Stake{/if}
					</Button>
				</div>
			{:else}
				<div class="field">
					<label for="amount">
						Unstake Amount <span class="max-amount" on:click={() => (inputValue = maxBalance)}>
							(max {numberWithCommas(Number(maxBalance), 2)})
						</span>
					</label>
					<input type="number" placeholder="0.00" bind:value={inputValue} min={0} step={0.01} />
				</div>
				<div class="actions">
					<Button opacity={0.5} on:click={() => (isStaking = true)}>Stake</Button>
					<Button widthFull on:click={unstake}>
						{#if pending}Unstaking...{:else}Unstake{/if}
					</Button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.section {
		max-width: 500px;
		margin: 0px auto 50px auto;
		text-align: center;
		padding: 1rem;
	}
	.section > div {
		margin: 2.5rem;
	}
	.field {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		text-align: left;
	}
	label {
		color: #ccc;
		margin-bottom: 0.25rem;
	}
	input[type='number'] {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 0.5rem;
		font-size: 16px;
		color: #202020;
		text-align: right;
		-moz-appearance: textfield;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input:focus-within {
		outline-color: #202020;
	}
	.actions {
		display: flex;
		margin: 1rem;
		gap: 0.4rem;
	}
	@media (max-width: 500px) {
		.actions {
			flex-direction: column-reverse;
		}
	}
	.max-amount {
		cursor: pointer;
		color: #999;
		user-select: none;
	}
</style>

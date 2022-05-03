<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import FormField from '../FormField.svelte';
	import PopInfo from '../PopInfo.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Select from '$lib/components/Select.svelte';
	import { closeModal } from '../Modal.svelte';
	import Range from '$lib/components/Range.svelte';
	import CurrencyInput from '$lib/components/CurrencyInput.svelte';
	import type { Split } from '$models/v2/splits';
	import type { Currency } from '$constants';
	import type { BigNumber } from 'ethers';
	import { MAX_DISTRIBUTION_LIMIT, splitPercentFrom } from '$utils/v2/math';
	import { parse as parseDate } from 'date-fns';
	import {
		getDistributionPercentFromAmount,
		getDistributionAmountFromPercentAfterFee
	} from '$utils/v2/distributions';
	import Popover from '../Popover.svelte';
	import { validateEthAddress, validatePercentage } from '$utils/validators';

	const feePercentage = '2.5';
	const today = new Date().toISOString().split('T')[0];

	const addressField = {
		label: 'Address',
		id: 'address',
		placeholder: 'juicebox.eth / 0x0000000000000000000000000000000000000000',
		props: {
			required: true
		}
	};
	const projectField = {
		id: 'projectId',
		label: 'Juicebox Project ID',
		placeholder: 'ID',
		props: {
			type: 'number',
			required: true
		}
	};

	// The distribution limit dictates if there is a paymount amount field
	export let distributionLimit: BigNumber | null = null;
	export let currency: Currency | null = null;
	let showAmount = distributionLimit && !distributionLimit.eq(MAX_DISTRIBUTION_LIMIT);

	// Wether an already existing split is being edited
	export let split: Split | null = null;

	// A callback function to set the splint in the store
	export let onFinish: (split: Split) => void;

	// TODO edit existing split
	// let editingExistingSplit = !!split;
	// onMount(() => {
	// })

	enum BeneficiaryType {
		Address = 1,
		ProjectID = 2
	}

	let beneficiaryType: BeneficiaryType.Address;
	let address: Address;
	let projectId: number;
	let amount = 0;
	let amountAfterFee: number;
	let lockedUntil: Date | null = null;
	// NOTE: this looks whack, but the range component takes in a list of values
	// and stores don't know how to handle embedded values
	let percent = 0;
	let rangeValue = [percent];

	let invalid: { [key: string]: boolean | string } = {
		projectId: false,
		address: false,
		percent: false
	};
	const isInvalid = () => Object.keys(invalid).find((key) => invalid[key]);

	async function validate() {
		if (beneficiaryType === BeneficiaryType.Address) {
			await validateEthAddress(address, [], 'Add', undefined).then(
				() => {
					invalid.address = false;
				},
				(msg) => {
					invalid.address = msg;
				}
			);
		} else {
			invalid.projectId = !projectId ? 'Required' : false;
		}
		await validatePercentage(rangeValue[0]).then(
			() => {
				invalid.percent = false;
			},
			(msg) => {
				invalid.percent = msg;
			}
		);
	}
	function setAmountAfterFee(percent: number) {
		amountAfterFee = getDistributionAmountFromPercentAfterFee({
			percent,
			distributionLimit: distributionLimit.toString(),
			feePercentage
		});
	}
	function setRangeValue(e: { detail: { value: BigNumber } }) {
		const value = e.detail.value;
		percent = getDistributionPercentFromAmount({
			amount: value.toNumber(),
			distributionLimit: distributionLimit.toString()
		});
		rangeValue[0] = percent;
	}

	async function addSplit() {
		await validate();
		if (isInvalid()) {
			console.warn(invalid);
			return;
		}
		let timestamp: number;
		if (lockedUntil) {
			const date = new Date(lockedUntil)
			timestamp = date.getTime() / 1000;
		}
		// Values derived by looking at DistributionSplitModal
		// in react jb-interface
		const split = {
			allocator: undefined,
			beneficiary: address,
			lockedUntil: timestamp,
			percent: splitPercentFrom(rangeValue[0]).toNumber(),
			preferClaimed: true,
			projectId: projectId.toString()
		} as Split;
		onFinish(split);
		closeModal();
		// onSplitsChanged(
		// 	mode === 'Edit'
		// 		? splits.map((m, i) =>
		// 				i === splitIndex
		// 					? {
		// 							...m,
		// 							...newSplit
		// 					  }
		// 					: m
		// 		  )
		// 		: [...splits, newSplit]
		// );
	}

	$: {
		if (showAmount) {
			// Set the input value when the range value changes
			amount = (rangeValue[0] / 100) * distributionLimit.toNumber();
			setAmountAfterFee(rangeValue[0]);
		}
	}

	$: {
		if (beneficiaryType === BeneficiaryType.Address) {
			addressField.label = 'Address';
			addressField.props.required = true;
		} else {
			addressField.label = 'Token beneficiary address';
			addressField.props.required = false;
		}
	}
</script>

<h3>Add a split</h3>
<section>
	<Select bind:value={beneficiaryType}>
		<option value={BeneficiaryType.Address}>Wallet address</option>
		<option value={BeneficiaryType.ProjectID}>Juicebox project</option>
	</Select>
	{#if beneficiaryType === BeneficiaryType.Address}
		<FormField field={addressField} bind:value={address} />
	{:else}
		<FormField field={projectField} bind:value={projectId} />
		<p class="issue" in:fly={{ duration: 100 }} class:hidden={!invalid.projectId}>
			{invalid.projectId}.
		</p>
		<FormField field={addressField} bind:value={address} />
	{/if}
	<p class="issue" in:fly={{ duration: 100 }} class:hidden={!invalid.address}>{invalid.address}.</p>
	{#if showAmount}
		<div class="gap">
			<label for="payoutAmount" class="small-gap"> Payout amount </label>
			<CurrencyInput on:setValue={setRangeValue} disabled {currency} inputValue={amount} />

			{#if amount && beneficiaryType === BeneficiaryType.Address}
				<Popover
					placement="right"
					message="Payouts to Ethereum addresses incur a 2.5% fee. Your project will receive JBX in return at the current issuance rate."
				>
					{amountAfterFee}{' '}
					after {feePercentage}% JBX membership fee
					<Icon name="questionCircle" />
				</Popover>
			{/if}
		</div>
	{/if}
	<div class="gap">
		<label for="percent">
			<PopInfo message="Percentage this payee will receive of all funds raised."
				>Percent of distribution limit</PopInfo
			>
		</label>
		<!-- NOTE the range reacts to a too large amount by setting it to the max value -->
		<Range bind:values={rangeValue} />
		<p class="issue" in:fly={{ duration: 100 }} class:hidden={!invalid.percent}>
			{invalid.percent}.
		</p>
	</div>
	<label for="lock-date" class="small-gap">Lock until</label>
	<input type="date" id="lock-date" min={today} placeholder="mm/dd/yyyy" bind:value={lockedUntil} />
	<p>
		If locked, this split can't be edited or removed until the lock expires or the funding cycle is
		reconfigured.
	</p>
</section>
<div class="actions">
	<Button onClick={closeModal} size="md" type="secondary">Cancel</Button>
	<Button size="md" onClick={addSplit}>Add split</Button>
</div>

<style>
	h3 {
		margin: 0;
	}
	section {
		margin: 40px 0;
	}
	label {
		display: block;
		font-weight: 400;
	}
	input[type='date'] {
		background: var(--background-l0);
		border: 1px solid #d9d9d9;
		height: 30px;
		color: rgba(0, 0, 0, 0.6);
		padding-inline-start: 10px;
	}
	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
		margin-top: 20px;
	}
	.gap {
		margin: 20px 0;
	}
	.small-gap {
		margin: 10px 0;
	}
	.hidden {
		display: none;
	}

	.issue {
		color: var(--text-failure);
	}
</style>

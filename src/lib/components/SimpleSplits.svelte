<script lang="ts">
	import { BigNumber } from 'ethers';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import Money from '$lib/components/Money.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';
	import { formatDate } from '$utils/formatDate';
	import { formatSplitPercent } from '$utils/v2/math';
	import { Currency, DistributionLimitType } from '$constants';

	import type { Split } from '$models/v2/splits';

	export let split: Split;
	export let distributionLimitType: DistributionLimitType | undefined;
	export let distributionLimit: BigNumber | undefined;
	export let currency: Currency | undefined;
</script>

<InfoSpaceBetween>
	<!-- TODO crown if Project owner (i.e. the logged in user) -->
	<div slot="left">
		<p>
			{(split.beneficiary && getTruncatedAddress(split.beneficiary)) ||
				`ProjectID ${split.projectId}`}:
		</p>
		{#if split.lockedUntil}
			<small>
				<Icon name="lock" />
				Locked until {formatDate(split.lockedUntil * 1000, 'yyyy-MM-dd')}
			</small>
		{/if}
		<span />
	</div>
	<p slot="right">
		{formatSplitPercent(BigNumber.from(split.percent))}%
		{#if distributionLimitType === DistributionLimitType.Specific}
			<!-- TODO put formatter in util file -->
			<!-- TODO URGENT (well, semi) Money component needs to account for decimal values -->
			(<Money
				amount={BigNumber.from(parseFloat(formatSplitPercent(BigNumber.from(split.percent))))
					.mul(distributionLimit)
					.div(100)}
				{currency}
			/>)
		{/if}
	</p>
</InfoSpaceBetween>

<style>
	p {
		margin: 0;
	}
	small {
		color: var(--text-secondary);
	}

	[slot='left'] {
		margin-top: 5px;
	}
</style>

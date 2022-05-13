<script lang="ts">
	/**
	 * NOTE: Styling for this component is globally defined by the sibling file
	 * Main.svelte.
	 */
	import EtherscanLink from '$lib/components/EtherscanLink.svelte';
	import InfoSpaceBetween from '$lib/components/InfoSpaceBetween.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import { formatHistoricalDate } from '$utils/formatDate';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';

	import type { ProjectCreateEvent } from '$models/subgraph-entities/vX/project-create-event';

	export let event: Partial<ProjectCreateEvent>;
</script>

<InfoSpaceBetween>
	<div slot="left">
		<p><small><Trans>Created</Trans></small></p>
		<!-- TODO formatted address with ENS, look at FormattedAddress.tsx -->
		<p>Project created by {getTruncatedAddress(event.caller)}</p>
	</div>
	<div slot="right">
		<p class="timestamp">
			{event.timestamp && formatHistoricalDate(event.timestamp * 1000)}
			<EtherscanLink value={event.txHash} type="tx" />
		</p>
	</div>
</InfoSpaceBetween>

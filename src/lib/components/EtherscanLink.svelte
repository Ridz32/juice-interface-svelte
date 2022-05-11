<script lang="ts">
	import { NetworkName } from '$models/network-name';
	import { readNetwork } from '$constants/networks';
	import Popover from '$lib/components/Popover.svelte';
	import ExternalLink from './ExternalLink.svelte';
	import Icon from './Icon.svelte';
	import { getTruncatedAddress } from '$lib/components/Address.svelte';

	export let value: string;
	export let type: 'tx' | 'address';
	export let truncated: boolean = false;

	let truncatedValue: string | undefined;

	if (truncated) {
		truncatedValue = getTruncatedAddress(value);
	}

	let subdomain = '';
	if (readNetwork.name !== NetworkName.mainnet) {
		subdomain = readNetwork.name + '.';
	}

	const href = `https://${subdomain}etherscan.io/${type}/${value}`;
</script>

{#if type === 'tx'}
	<Popover message={'See transaction'}>
		<ExternalLink {href}>
			<Icon name="link" />
		</ExternalLink>
	</Popover>
{:else}
	<Popover message={'Go to Etherscan'}>
		<ExternalLink {href}>{truncatedValue ?? value}</ExternalLink>
	</Popover>
{/if}

<script lang="ts">
	import { readNetwork } from '$constants/networks';
	import { NetworkName } from '$models/network-name';
	import { provider } from '$stores/web3';
	import Modal, { bind } from '$lib/components/Modal.svelte';
	import SwitchNetworkContent from './SwitchNetworkContent.svelte';
	import { getDefaultProvider } from 'ethers';

	let showModal = false;

	const networkName = readNetwork.name;
	const supportedNetworks: NetworkName[] = [NetworkName.mainnet, NetworkName.rinkeby];

	const supportedNetworkOptions = supportedNetworks
		.filter((n) => import.meta.env.VITE_INFURA_NETWORK !== n)
		.map((_n) => {
			const subDomain = _n === NetworkName.mainnet ? '' : _n + '.';
			console.log(subDomain);
			console.log(_n);
			return {
				label: `${subDomain}juicebox.wtf`,
				href: `https://${subDomain}juicebox.wtf`
			};
		});

	$: {
		const currentProvider = $provider || getDefaultProvider(networkName);
		showModal = currentProvider?.network?.name !== networkName;
	}
</script>

<Modal
	show={showModal &&
		bind(SwitchNetworkContent, { networkName, networkOptions: supportedNetworkOptions })}
/>

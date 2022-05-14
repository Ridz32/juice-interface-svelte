<script lang="ts">
	import { modal } from '$stores';
	import MobileHeader from '$lib/components/MobileHeader.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	import { loadLocale } from '$lib/provider/LanguageProvider';
	import Intl from '$lib/provider/Intl.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import SwitchNetworkModal from '$lib/components/SwitchNetworkModal.svelte';

	onMount(async () => {
		await loadLocale();
	});
</script>

<svelte:head>
	<title>JuiceboxDAO</title>
</svelte:head>

<Intl config={{}}>
	<main>
		<Header />
		<MobileHeader />
		<slot />
	</main>
	<SwitchNetworkModal />
</Intl>

<style>
	main {
		margin: 0 auto;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>

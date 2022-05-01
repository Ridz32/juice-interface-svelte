<script lang="ts">
	import MobileHeader from '$lib/components/MobileHeader.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import '../styles/antd.css';
	import '../styles/index.scss';
</script>

<svelte:head>
	<title>JuiceboxDAO</title>
</svelte:head>

<main>
	<Header />
	<MobileHeader />
	<slot />
</main>

<style>
	main {
		margin: 0 auto;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>

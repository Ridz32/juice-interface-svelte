<script lang="ts">
	import MobileHeader from '$lib/components/MobileHeader.svelte';
	import Header from '$lib/components/Header.svelte';
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

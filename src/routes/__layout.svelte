<script lang="ts">
	import Footer from '$lib/sections/Footer.svelte';
	import Header from '$lib/sections/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>OneOf Foundation DAO</title>
</svelte:head>

<main>
	<Header />
	<slot />
	<Footer />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}	
</style>

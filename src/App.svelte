<script>
	import NavBar from "./Nav.svelte";
</script>

<main>
	<NavBar />
	<h1>Community funding for people and projects!</h1>
	<p>Build a community around a project, fund it, and program its spending. Light enough for a group of friends, powerful enough for a global network of anons.</p>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--text-header);
		font-size: 1.5rem;
		font-weight: 800;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
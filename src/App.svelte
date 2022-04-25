<script>
  import NavBar from "./Nav.svelte";
  import LandingInfo from "./LandingInfo.svelte";
</script>

<NavBar />
<main>
  <LandingInfo />
</main>

<style>
  main {
    padding: 0 40px;
    margin: 0 40px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

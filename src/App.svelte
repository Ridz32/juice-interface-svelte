<script lang="ts">
  import NavBar from "./Nav.svelte";
  import LandingInfo from "./LandingInfo.svelte";
  import CreateProject from "./CreateProject.svelte";
</script>

<NavBar />
<main>
  <LandingInfo />
  <CreateProject />
</main>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import NavBar from "./Nav.svelte";
  import LandingInfo from "./LandingInfo.svelte";
  import CreateProject from "./CreateProject.svelte";
</script>

<Router>
  <NavBar />
  <main>
    <Route path="/">
      <LandingInfo />
    </Route>
    <Route path="/create">
      <CreateProject />
    </Route>
  </main>
</Router>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

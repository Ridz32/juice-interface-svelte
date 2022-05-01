<script lang="ts">
  import { Router, Route } from "svelte-navigator";
import AddSplitModal from "./AddSplitModal.svelte";
  import CreateProject from "./CreateProject.svelte";
  import LandingInfo from "./LandingInfo.svelte";
  import Modal from "./Modal.svelte";
  import NavBar from "./Nav.svelte";
  import { modal } from "./stores.js";
</script>

<Router>
  <NavBar />
  <main>
    <Route path="/">
      <LandingInfo />
    </Route>
    <Route path="create">
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

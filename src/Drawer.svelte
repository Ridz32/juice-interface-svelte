<script lang="ts">
  import { fly, fade } from "svelte/transition";

  export let shown = false;
  console.log(shown);
</script>

{#if shown}
  <!-- The element that makes the whole page besides drawer darkish  -->
  <div
    class="overlay"
    in:fade={{ duration: 100 }}
    out:fade
    on:click={() => (shown = false)}
  />

  <div
    class="drawer-container"
    style="width: 600px;"
    in:fly={{ x: 120 }}
    out:fly={{ x: 120 }}
  />
{/if}

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .drawer-container {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background-color: var(--background-l0);
    z-index: 999;
    width: 600px;
    height: 100%;
  }
</style>

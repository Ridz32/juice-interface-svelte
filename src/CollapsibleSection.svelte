<script>
  import { slide } from "svelte/transition";

  import Icon from "./Icon.svelte";
  let expanded = true;
</script>

<button aria-expanded={expanded} on:click={() => (expanded = !expanded)}>
  <Icon name="caret" direction={expanded ? "e" : "n"} />
  <slot name="header" />
</button>

{#if expanded}
  <div transition:slide>
    <slot />
  </div>
{/if}

<style>
  button {
    background-color: unset;
    border: none;
    border-bottom: 1px solid var(--light-body);
    color: var(--text-header);
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let fullWidth = false;
  export let fullHeight = false;
  export let color = 'primary';
  export let variant: 'contained' | 'link' | 'outlined' = 'contained';
  export let ref: HTMLElement = undefined;
  export let disabled = false;
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const dispatch = createEventDispatcher();

  function onClick(event: MouseEvent) {
    if (disabled) {
      return event.preventDefault();
    } else {
      dispatch('click', event.detail);
    }
  }
</script>

<button
  class:disabled
  class="button {variant} {color} {size}"
  class:fullWidth
  class:fullHeight
  {...$$restProps}
  bind:this={ref}
  on:click={onClick}
>
  <slot />
</button>

<style lang="scss">
  @import './button';
</style>

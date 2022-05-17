<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  export let open = false;
  export let duration = 0.2;
  export let placement = 'right';
  export let size = null;
  export let background: string = 'white';

  let mounted = false;
  const dispatch = createEventDispatcher();

  $: style = `--duration: ${duration}s; --size: ${size};`;
  $: style_panel = `background-color: var(--background-${background})`;

  function scrollLock(open) {
    if (mounted) {
      const body = document.querySelector('body');
      body.style.overflow = open ? 'hidden' : 'auto';
    }
  }

  $: scrollLock(open);
  function handleClickAway() {
    dispatch('clickAway');
  }

  onMount(() => {
    mounted = true;
    scrollLock(open);
  });
</script>

<aside class="drawer" class:open {style}>
  <div class="overlay" on:click={handleClickAway} />
  <div class="panel {placement}" class:size style={style_panel}>
    <slot />
  </div>
</aside>

<style lang="scss" scoped>
  @import './drawer.scss';
</style>

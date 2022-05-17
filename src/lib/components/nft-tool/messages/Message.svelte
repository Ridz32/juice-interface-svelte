<script>
  import { InfoIcon } from 'svelte-feather-icons';
  export let icon = false;
</script>

<div class="message" class:icon>
  {#if icon}
    <div class="icon">
      <InfoIcon size="1.5x" />
    </div>
  {/if}
  <div class="text" class:icon>
    <slot />
  </div>
</div>

<style lang="scss" scoped>
  .message {
    display: flex;
    max-width: 630px;
    background-color: var(--background-l1);
    &.icon {
      padding: 15px 35px;
    }
    padding: 10px;
    .text.icon {
      margin-left: 20px;
    }
    .text {
      margin-left: 10px;
    }
    .icon {
      margin-top: 5px;
    }
  }
</style>

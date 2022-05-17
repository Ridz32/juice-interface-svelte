<script lang="ts">
  export let title: string;
  export let icon: any = '';
</script>

<div class="basic-card">
  <span class="title">
    {title}
    {#if icon}
      <svelte:component this={icon} size="1x" />
    {/if}
  </span>
  <slot />
</div>

<style lang="scss" scoped>
  .basic-card {
    background-color: var(--background-l2);
    box-shadow: 14px 14px 0px -2px var(--background-l1);
    margin: 25px 0;
    padding: 20px 25px;
  }
  .title {
    color: var(--text-header);
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
  }
</style>

<script lang="ts">
  import { CheckCircleIcon } from 'svelte-feather-icons';

  export let title: string;
  export let desc: string;
  export let checked: boolean = false;
  export let onclick: any;
</script>

<div on:click={onclick} class="card">
  <div class="card-content">
    <h4 class="card-title">{title}</h4>
    <p class="card-description">{desc}</p>
  </div>
  {#if checked}
    <div class="card-complete">
      <CheckCircleIcon size="1.5x" />
    </div>
  {/if}
</div>

<style lang="scss" scoped>
  .card {
    display: flex;
    margin: 10px 0;
    padding: 13px 37px;
    border: 1px solid var(--switch-color);
    max-width: 630px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &-title {
      color: var(--switch-color);
      font-weight: 500;
      margin: 0;
    }
    &-description {
      color: var(--text-tertiary);
      font-weight: 400;
      font-size: 12px;
      margin: 0;
    }
    &-complete {
      display: flex;
      align-items: center;
    }
  }
</style>

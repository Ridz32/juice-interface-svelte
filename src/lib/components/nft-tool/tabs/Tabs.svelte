<script>
  export let items = {};
  export let activeTabValue = 1;

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul class="header-tabs">
  {#each items as item}
    <li class:active={activeTabValue === item.value} class="header-tabs-item" on:click={handleClick(item.value)}>
      <span>{item.value}. {item.label}</span>
    </li>
  {/each}
</ul>
{#each items as item}
  {#if activeTabValue == item.value}
    <div class="box">
      <svelte:component this={item.component} name={item.label} />
    </div>
  {/if}
{/each}

<style lang="scss" scoped>
  .header-tabs {
    display: flex;
    width: 100%;
    border-bottom: solid var(--color-gray-100) 1px;
    margin: 20px 0;
    &-item {
      color: var(--text-secondary);
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      padding-right: 50px;
      cursor: pointer;
    }
    &-item.active {
      color: var(--text-header);
      border-bottom: solid var(--text-header) 5px;
    }
    padding: 0;
    list-style: none;
  }
</style>

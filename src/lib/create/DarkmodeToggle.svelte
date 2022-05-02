<script>
  import Icon from "$lib/components/Icon.svelte";
</script>

<div role="switch">
  <Icon name="sun" />
  <Icon name="moon" />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid var(--stroke-tertiary);
    transition: border-color 0.12s ease-out;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;
  }
</style>

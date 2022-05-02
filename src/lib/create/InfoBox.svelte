<script>
  import Icon from "$lib/components/Icon.svelte";
  export let info;
</script>

<aside>
  <div class="icon">
    <Icon name="infoCircle" />
  </div>
  <p>
    {@html info}
  </p>
</aside>

<style>
  aside {
    background-color: rgb(231, 227, 220);
    padding: 20px 20px;
    font-weight: 300;
    display: flex;
    align-items: flex-start;
  }

  p {
    margin: 0;
  }

  .icon {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
</style>

<script>
  import Icon from "./Icon.svelte";
</script>

<p>
  <Icon name="questionCircle" />
  <slot />
</p>

<style>
  p {
    color: rgb(216, 170, 1);
  }
</style>

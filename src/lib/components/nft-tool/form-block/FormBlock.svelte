<script lang="ts">
  import QuestionIcon from '$lib/components/nft-tool/icons/QuestionIcon.svelte';
  export let title = '';
  export let info = false;
</script>

<div class="container">
  {#if title}
    <span class="title">
      {title}
      {#if info}
        <div class="title-icon">
          <QuestionIcon />
        </div>
      {/if}
    </span>
  {/if}
  <slot />
</div>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    border: 0.4px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 24px;

    .title {
      margin-left: 2px;
      margin-bottom: 10px;
      color: var(--text-header);
      font-size: 14px;
      font-weight: 500;
      display: flex;

      .title-icon {
        display: flex;
        align-items: center;
        margin-left: 15px;
      }
    }
  }
</style>

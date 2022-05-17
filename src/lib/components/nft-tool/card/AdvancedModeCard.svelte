<script lang="ts">
  import BasicCard from '$lib/components/nft-tool/card/BasicCard.svelte';
  import Button from '$lib/components/nft-tool/button/Button.svelte';

  export let disabled: boolean = false;

  let mode = false;
  const onCLick = () => {
    mode = !mode;
  };
</script>

<BasicCard title="Advanced">
  <p class="advanced-text">To learn about how to create a project-config package visit:</p>
  <br />
  <p class="advanced-text github-link">
    <svg height="16" aria-hidden="true" viewBox="0 0 16 16" width="16" class="github-icon">
      <path
        fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
    <a href="https://github.com/tankbottoms">https://github.com/tankbottoms</a>
  </p>
  <div class="button-container">
    <Button type="button" color="primary" on:click={onCLick} {disabled}>
      {#if mode}
        Advanced Mode Disable
      {:else}
        Advanced Mode Enable
      {/if}
    </Button>
  </div>
</BasicCard>

<style lang="scss" scoped>
  .advanced-text {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
  .github-link {
    display: flex;
    align-items: center;
    .github-icon {
      margin-right: 10px;
    }
    a {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: underline;
    }
  }
  .button-container {
    margin: 8px 0 -10px 0;
    display: flex;
    justify-content: end;
  }
</style>

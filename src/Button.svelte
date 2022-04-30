<script lang="ts">
  export let onClick: (e: Event) => void;
  export let size: "sm" | "md" | "lg" | "xl" = "lg";
</script>

<button class={size} on:click={onClick}><slot /></button>

<style>
  button {
    margin-top: 2rem;
    background: var(--background-action-primary);
    border-color: transparent;
    box-shadow: 0 6px 10px rgb(0 0 0 / 8%);
    border-radius: var(--radius-sm);
    color: var(--text-over-action-primary);
    font-weight: 500;
    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
    cursor: pointer;
  }

  .md {
    height: 32px;
    font-size: 14px;
    font-weight: 300;
    padding: unset;
    width: 150px;
    margin-top: 0;
  }

  button:hover {
    box-shadow: 0 8px 12px rgb(0 0 0 / 12%);
  }
</style>

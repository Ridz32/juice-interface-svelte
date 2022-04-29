<script>
  export let description;
  export let number;
  export let onClick;
  export let title;
  export let visited;
</script>

<div role="button" class={visited ? "visited" : ""} on:click={onClick}>
  <div class="number">{number}</div>
  <div class="details">
    <div class="title">{title}</div>
    <div class="description">
      {description}
    </div>
  </div>
  <!-- TODO put svg in icon file -->
  {#if visited}
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="check-circle"
      width="1em"
      height="1em"
      aria-hidden="true"
      ><path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      /></svg
    >
  {:else}
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"
      />
    </svg>
  {/if}
</div>

<style>
  svg {
    align-self: center;
    margin-left: auto;
    fill: rgb(24, 180, 199);
    width: 15px;
    height: 15px;
    padding-left: 20px;
  }

  .number {
    margin-right: 15px;
  }

  .description {
    color: var(--text-primary);
    font-weight: 300;
    font-size: 0.75rem;
    margin-top: 10px;
  }

  div[role="button"] {
    display: flex;
    cursor: pointer;
    padding: 15px;
    border-radius: 1px;
    font-weight: 500;
    color: rgb(24, 180, 199);
    border-color: rgb(24, 180, 199);
    border-style: solid;
    border-width: 1px;
    margin-bottom: 16px;
  }

  div[role="button"].visited {
    color: rgba(0, 0, 0, 0.333);
    border-color: rgba(0, 0, 0, 0.333);
  }

  div[role="button"].visited .description {
    color: rgba(0, 0, 0, 0.333);
  }

  div[role="button"].visited svg {
    fill: rgba(0, 0, 0, 0.333);
  }
  
</style>

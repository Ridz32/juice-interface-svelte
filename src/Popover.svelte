<script lang="ts">
    export let message: string;
</script>

<div class="wrapper">
    <slot />
    <div class="content">
      <p class="message">{message}</p>
    </div>
</div>


<style>
  .wrapper {
    position: relative;
    display: inline-block;
  }
  .content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: -20px;
    transform: translate(0, 10px);
    padding: 12px 16px;

    background: var(--background-l0);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    width: 170px;
  }
  .wrapper:hover .content {
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transform: translate(0, -20px);
    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }
  .message {
    /* font-family: 'DM Mono', monospace; */
    font-size: 11px;
    color: var(--text-primary);
    margin: 0;
  }
</style>

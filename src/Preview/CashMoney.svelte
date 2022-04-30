<script lang="ts">
  import InfoSpaceBetween from "../InfoSpaceBetween.svelte";
</script>

<!-- TODO: rename this component, quite undescriptive given other sibling is "Funding" -->
<InfoSpaceBetween>
  <!-- TODO info question mark thingy with popover on hover-->
  <p slot="left">In juicebox</p>
  <p slot="right" class="money"><span>Ξ</span>0</p>
</InfoSpaceBetween>
<InfoSpaceBetween>
  <!-- TODO info question mark thingy with popover on hover-->
  <p slot="left">Distributed</p>
  <p slot="right">100% Overflow</p>
</InfoSpaceBetween>
<!-- TODO the overflow progress bar showing % of funding? -->
<InfoSpaceBetween>
    <!-- TODO info question mark thingy with popover on hover-->
    <p slot="left">In wallet</p>
  </InfoSpaceBetween>

<style>
  p {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.333);
    font-weight: 500;
    margin: 5px 0px;
  }
  span {
    font-family: sans-serif;
  }
  .money {
    color: var(--text-brand-primary);
  }
</style>

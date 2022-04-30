<script lang="ts">
  import Icon from "../Icon.svelte";
  import InfoSpaceBetween from "../InfoSpaceBetween.svelte";
  import Popover from "../Popover.svelte";
</script>

<!-- TODO: rename this component, quite undescriptive given other sibling is "Funding" -->
<InfoSpaceBetween>
  <div slot="left">
    <p>In juicebox</p>
    <Popover message="The balance of this project in the Juicebox contract."
      ><Icon name="questionCircle" /></Popover
    >
  </div>
  <p slot="right" class="money"><span>Ξ</span>0</p>
</InfoSpaceBetween>
<InfoSpaceBetween>
  <div slot="left">
    <p>Distributed</p>
    <Popover message="The amount that has been distributed from the Juicebox balance in this funding cycle, out of the current distribution limit. No more than the distribution limit can be distributed in a single funding cycle—any remaining ETH in Juicebox is overflow, until the next cycle begins."
      ><Icon name="questionCircle" /></Popover
    >
  </div>
  <!-- <p slot="left">Distributed</p> -->
  <!-- <p slot="right">100% Overflow</p> -->
  <div slot="right">
    <p>100% Overflow</p>
    <Popover message="The target for this funding cycle is 0, meaning all funds in Juicebox are currently considered overflow. Overflow can be redeemed by token holders, but not distributed."
      ><Icon name="questionCircle" /></Popover
    >
  </div>
</InfoSpaceBetween>
<!-- TODO the overflow progress bar showing % of funding? -->
<InfoSpaceBetween>
  <div slot="left">
    <p>In wallet</p>
    <Popover message="The balance of the project owner's wallet."
      ><Icon name="questionCircle" /></Popover
    >
  </div>
</InfoSpaceBetween>

<style>
  p {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 5px 0px;
    display: inline-block;
  }
  div[slot="left"], div[slot="right"], p {
    color: rgba(0, 0, 0, 0.333);
  }
  span {
    font-family: sans-serif;
  }
  .money {
    color: var(--text-brand-primary);
  }
</style>

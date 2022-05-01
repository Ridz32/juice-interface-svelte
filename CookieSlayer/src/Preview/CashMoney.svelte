<script lang="ts">
  import Icon from "../Icon.svelte";
  import InfoSpaceBetween from "../InfoSpaceBetween.svelte";
  import PopInfo from "../PopInfo.svelte";
  import Popover from "../Popover.svelte";
  import ETH from "../Ethereum.svelte";
</script>

<!-- TODO: rename this component, quite undescriptive given other sibling is "Funding" -->
<InfoSpaceBetween>
  <div slot="left">
    <PopInfo message="The balance of this project in the Juicebox contract."
      ><p>In juicebox</p></PopInfo
    >
  </div>
  <p slot="right" class="money"><ETH />0</p>
</InfoSpaceBetween>
<InfoSpaceBetween>
  <div slot="left">
    <PopInfo
      message="The amount that has been distributed from the Juicebox balance in this funding cycle, out of the current distribution limit. No more than the distribution limit can be distributed in a single funding cycle—any remaining ETH in Juicebox is overflow, until the next cycle begins."
    >
      <p>Distributed</p></PopInfo
    >
  </div>
  <div slot="right">
    <PopInfo
      message="The target for this funding cycle is 0, meaning all funds in Juicebox are currently considered overflow. Overflow can be redeemed by token holders, but not distributed."
      ><p>100% Overflow</p></PopInfo
    >
  </div>
</InfoSpaceBetween>
<progress max="100" value="" />
<InfoSpaceBetween>
  <div slot="left">
    <PopInfo message="The balance of the project owner's wallet.">
      <p>In wallet</p>
    </PopInfo>
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
  div[slot="left"],
  div[slot="right"],
  p {
    color: rgba(0, 0, 0, 0.333);
  }
  .money {
    color: var(--text-brand-primary);
  }

  progress {
    width: 100%;
    height: 8px;
    background: var(--background-l0);
    margin: 10px 0px;
  }

  progress::-webkit-progress-bar {
    background-color: var(--background-l1);
    border-radius: 7px;
  }
  progress::-webkit-progress-value {
    background-color: var(--text-brand-primary);
    border-radius: 7px;
  }
</style>

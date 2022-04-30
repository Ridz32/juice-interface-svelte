<script>
  import CollapsibleSection from "../CollapsibleSection.svelte";
  import HeavyBorderBox from "../HeavyBorderBox.svelte";
  import PopInfo from "../PopInfo.svelte";

  const cycleKeyValues = [
    { label: "Distribution limit", value: "Zero" },
    { label: "Duration", value: "14d" },
    { label: "Start", value: "2022-04-30 8:43pm" },
    { label: "End", value: "2022-05-30 8:43pm" },
    {
      label: "Discount rate",
      value: "0%",
      info: "The ratio of tokens rewarded per payment amount will decrease by this percentage with each new funding cycle. A higher discount rate will incentivize supporters to pay your project earlier than later.",
    },
    {
      label: "Redemption rate",
      value: "100%",
      info: "This rate determines the amount of overflow that each token can be redeemed for at any given time. On a lower bonding curve, redeeming a token increases the value of each remaining token, creating an incentive to hold tokens longer than others. A redemption rate of 100% means all tokens will have equal value regardless of when they are redeemed.",
    },
    {
      label: "Reserved tokens",
      value: "0%",
      info: 'Whenever someone pays your project, this percentage of tokens will be reserved and the rest will go to the payer. Reserve tokens are reserved for the project owner by default, but can also be allocated to other wallet addresses by the owner. Once tokens are reserved, anyone can "mint" them, which distributes them to their intended receivers.',
    },
    {
      label: "Issuance rate",
      value: "1,000,000 tokens/ETH",
      info: "Tokens received per ETH paid to the treasury. This can change over time according to the discount rate and reserved tokens amount of future funding cycles.",
    },
    { label: "Payments", value: "Enabled" },
    {
      label: "Token minting",
      value: "Disabled",
      info: "Token minting allows the project owner to mint project tokens at any time.",
    },
    {
      label: "Reconfiguration strategy",
      value: "3-day delay",
      info: "Rules for determining how funding cycles can be reconfigured.",
    },
  ];
</script>

<div class="title yellow">
  <PopInfo
    message="Tokens are distributed to anyone who pays this project. If the project has set a funding target, tokens can be redeemed for a portion of the project's overflow whether or not they have been claimed yet."
  >
    <h4>Tokens</h4>
  </PopInfo>
</div>
<p>Total supply: <span>0 tokens</span></p>

<div class="title yellow">
  <PopInfo
    message="A project's lifetime is defined in funding cycles. If a funding target is set, the project can withdraw no more than the target for the duration of the cycle."
    ><h4>Funding cycle</h4></PopInfo
  >
</div>
<p class="sub-header">CURRENT</p>
<HeavyBorderBox>
  <CollapsibleSection>
    <div slot="header">
      <h4 class="collapse-header">Cycle #1</h4>
      <p>13d 23h 3m until #2</p>
    </div>
    <div class="current-cycle">
      {#each cycleKeyValues as { label, value, info }}
        {#if info}
          <div class="title gap">
            <PopInfo message={info}><p><b>{label}</b></p></PopInfo>:<span
              >{value}</span
            >
          </div>
        {:else}
          <p class="gap"><b>{label}:</b> <span>{value}</span></p>
        {/if}
      {/each}
    </div>
  </CollapsibleSection>
</HeavyBorderBox>
<HeavyBorderBox />
<HeavyBorderBox />

<style>
  .title {
    display: flex;
    align-items: baseline;
  }

  .yellow {
    color: var(--text-header);
  }
  h4 {
    margin-right: 5px;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.33);
  }

  span {
    margin-left: 10px;
    color: var(--text-primary);
  }

  div[slot="header"] {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .collapse-header {
    margin: 0 10px;
  }

  .current-cycle {
    margin: 20px 0;
  }

  .current-cycle p {
    color: rgba(0, 0, 0, 0.6);
  }

  .current-cycle .gap {
    margin: 10px 0px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }

  .current-cycle span {
    font-weight: 300;
  }
  .sub-header {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    margin: 10px 0;
  }
</style>

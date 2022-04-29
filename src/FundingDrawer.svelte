<script lang="ts">
  import AlertText from "./AlertText.svelte";
  import HeavyBorderBox from "./HeavyBorderBox.svelte";
  import Input from "./FundingCycleInput.svelte";
  import Toggle from "./Toggle.svelte";

  let fundingCycles = false;
  function toggleFundingCycles(e: Event) {
    fundingCycles = !fundingCycles;
  }
</script>

<!-- TODO learn more links -->

<h1>Funding</h1>
<HeavyBorderBox>
  <Toggle checked={fundingCycles} onClick={toggleFundingCycles}
    ><h3>Funding cycles</h3></Toggle
  >
  <p>Set the length of your funding cycles, which can enable:</p>
  <ol>
    <li>
      <b>Recurring funding cycles</b> (for example, distribute $30,000 from your
      project's treasury every 14 days).
    </li>
    <li>
      A <b>discount rate</b> to automatically reduce the issuance rate of your project's
      token (tokens/ETH) each new funding cycle.
    </li>
    <li>
      Restrict how the owner can reconfigure upcoming funding cycles to mitigate
      abuse of power. <a href="/">Learn more</a>.
    </li>
  </ol>
  {#if fundingCycles}
    <Input />
  {/if}
</HeavyBorderBox>
<HeavyBorderBox>
  <h3>Distribution limit</h3>
  <p>
    Set the amount of funds you'd like to distribute from your treasury each
    funding cycle.
  </p>

  <p>
    Any treasury funds within the distribution limit can be paid out to
    destinations that you can define as <b>splits</b>.
    <a href="/">Learn more</a> about payout splits.
  </p>
  <p>
    Any treasury funds in excess of the distribution limit is called <b
      >overflow.</b
    >
    Overflow can be claimed by your project's token holders by redeeming their tokens.
    <a href="/">Learn more</a> about overflow.
  </p>
  <AlertText
    >With a distribution limit of Zero, no funds can be distributed by the
    project. All funds belong to token holders as overflow.</AlertText
  >
</HeavyBorderBox>
<HeavyBorderBox>
  <h3>Payout splits</h3>
  <AlertText
    >Payout splits can't be scheduled when the distribution limit is Zero.</AlertText
  >
</HeavyBorderBox>

<style>
  h1 {
    font-weight: 500;
  }

  h3 {
    font-weight: 300;
  }
</style>

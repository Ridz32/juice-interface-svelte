<script lang="ts">
  import DescriptiveNumberedButton from "./DescriptiveNumberedButton.svelte";
  import Drawer from "./Drawer.svelte";
  import HeavyBorderBox from "./HeavyBorderBox.svelte";
  import InfoBox from "./InfoBox.svelte";
  import Toggle from "./Toggle.svelte";

  let drawerOpen = false;

  const buttons = [
    {
      title: "Funding",
      description: "Configure how your project will collect and spend funds",
    },
    {
      title: "Token",
      description: "Configure the dynamics of your project's token.",
    },
    {
      title: "Rules",
      description: "Configure restrictions for your funding cycles.",
    },
  ];

  function onClick(e: Event) {
    drawerOpen = true;
  }
</script>

<InfoBox
  info={`Funding Cycle #1 will start immediately after you deploy your project. Once deployed, <b>Funding Cycle #1 can't be reconfigured.</b>
<br><br>
You can reconfigure your project's funding cycles later on, and changes will take effect in the next funding cycle (Funding Cycle #2).`}
/>

<section class="buttons">
  {#each buttons as button, number}
    <DescriptiveNumberedButton {...button} number={number + 1} {onClick} />
  {/each}
</section>

<!-- TODO learn more links -->
<Drawer bind:shown={drawerOpen}>
  <div class="content">
    <h1>Funding</h1>
    <HeavyBorderBox>
      <Toggle><h3>Funding cycles</h3></Toggle>
      <p>Set the length of your funding cycles, which can enable:</p>
      <ol>
        <li>
          <b>Recurring funding cycles</b> (for example, distribute $30,000 from your
          project's treasury every 14 days).
        </li>
        <li>
          A <b>discount rate</b> to automatically reduce the issuance rate of your
          project's token (tokens/ETH) each new funding cycle.
        </li>
        <li>
          Restrict how the owner can reconfigure upcoming funding cycles to
          mitigate abuse of power. <a href="/">Learn more</a>.
        </li>
      </ol>
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
        Overflow can be claimed by your project's token holders by redeeming their
        tokens. <a href="/">Learn more</a> about overflow.
      </p>
    </HeavyBorderBox>
  </div>
</Drawer>

<style>
  h1 {
    font-weight: 500;
  }

  h3 {
    font-weight: 300;
  }
  .buttons {
    margin-top: 40px;
  }

  .content {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }
</style>

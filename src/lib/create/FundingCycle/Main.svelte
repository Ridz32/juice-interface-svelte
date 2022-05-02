<script lang="ts">
  import { visitedFundingDrawers as visited } from "../stores";
  import DescriptiveNumberedButton from "../DescriptiveNumberedButton.svelte";
  import Drawer from "../Drawer.svelte";
  import FundingDrawer from "./FundingDrawer.svelte";
  import InfoBox from "../InfoBox.svelte";
  import RulesDrawer from "../RulesDrawer.svelte";
  import TokenDrawer from "./TokenDrawer.svelte";

  let drawerOpen = false;
  let current = "";

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

  function onClick(button: string) {
    drawerOpen = true;
    current = button;
    visited.update((state: any) => ({
      ...state,
      [button]: true,
    }));
  }
</script>

<InfoBox
  info={`Funding Cycle #1 will start immediately after you deploy your project. Once deployed, <b>Funding Cycle #1 can't be reconfigured.</b>
<br><br>
You can reconfigure your project's funding cycles later on, and changes will take effect in the next funding cycle (Funding Cycle #2).`}
/>

<section class="buttons">
  {#each buttons as button, number}
    <DescriptiveNumberedButton
      {...button}
      number={number + 1}
      onClick={() => onClick(button.title)}
      visited={$visited[button.title]}
    />
  {/each}
</section>

<Drawer bind:shown={drawerOpen}>
  <div class="content">
    {#if current === "Funding"}
      <FundingDrawer />
    {:else if current === "Token"}
      <TokenDrawer />
    {:else if current === "Rules"}
      <RulesDrawer />
    {/if}
  </div>
</Drawer>

<style>
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

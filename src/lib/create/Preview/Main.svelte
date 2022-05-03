<script lang="ts">
  import { BigNumber } from "@ethersproject/bignumber";
  import CashMoney from "./CashMoney.svelte";
  import Funding from "./Funding.svelte";
  import InfoHeader from "./InfoHeader.svelte";
  import Pay from "./Pay.svelte";

  import { fundingCycle } from "../stores";

// FUNDING CYCLE MOCK DATA WHILE REBUILDUING

  // $: {
  //   fundingCycleDuration
  // }

const mockDataFunding = {
  fundingCycleNumber: BigNumber.from(1),
  fundingCycleStartTime: BigNumber.from(1588294400),
  fundingCycleDurationSeconds: $fundingCycle.duration,
  fundingCycleRiskCount: 1,
  isFundingCycleRecurring: true,
  isPreviewMode: true,
}

</script>



<h1 class="title">Preview:</h1>
<InfoHeader />
<CashMoney />
<Pay />
<Funding {...{...mockDataFunding, fundingCycleDurationSeconds: $fundingCycle.duration}} />

<style>
  .title {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0px;
    font-weight: 400;
  }
</style>

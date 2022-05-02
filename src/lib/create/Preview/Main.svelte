<script lang="ts">
  import { BigNumber } from "@ethersproject/bignumber";
  import CashMoney from "./CashMoney.svelte";
  import Funding from "./Funding.svelte";
  import InfoHeader from "./InfoHeader.svelte";
  import Pay from "./Pay.svelte";

// FUNDING CYCLE MOCK DATA WHILE REBUILDUING

const mockDataFunding = {
  fundingCycleNumber: BigNumber.from(1),
  fundingCycleStartTime: BigNumber.from(1588294400),
  fundingCycleDurationSeconds: BigNumber.from(86400),
  fundingCycleRiskCount: 1,
  isFundingCycleRecurring: true,
  expand: false,
  isPreviewMode: false,
}

</script>



<h1 class="title">Preview:</h1>
<InfoHeader />
<CashMoney />
<Pay />
<Funding {...mockDataFunding}/>

<style>
  .title {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0px;
    font-weight: 400;
  }
</style>

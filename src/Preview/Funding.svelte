<script>
  import HeavyBorderBox from "../HeavyBorderBox.svelte";
import Icon from "../Icon.svelte";

  import Popover from "../Popover.svelte";
</script>

<div class="title">
  <h4>Tokens</h4>
  <Popover
    message="Tokens are distributed to anyone who pays this project. If the project has set a funding target, tokens can be redeemed for a portion of the project's overflow whether or not they have been claimed yet."
    ><Icon name="questionCircle" /></Popover
  >
</div>
<p>Total supply: <span>0 tokens</span></p>

<div class="title">
  <h4>Funding cycle</h4>
  <Popover
    message="A project's lifetime is defined in funding cycles. If a funding target is set, the project can withdraw no more than the target for the duration of the cycle."
    ><Icon name="questionCircle" /></Popover
  >
</div>
<p class="sub-header">CURRENT</p>
<HeavyBorderBox>
    <h4>Cycle #1</h4>
</HeavyBorderBox>


<style>
  .title {
    display: flex;
    align-items: baseline;
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
    margin-left: 20px;
    color: var(--text-primary);
  }

  .sub-header {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 12px;
    color: rgba(0,0,0, 0.6);
    margin: 10px 0;
  }
</style>

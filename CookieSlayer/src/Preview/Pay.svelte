<script lang="ts">
  import { projectDetails } from "../stores";
  import Button from "../Button.svelte";
  import Icon from "../Icon.svelte";
  import ETH from "../Ethereum.svelte";

  enum Currency {
    ETH = "ETH",
    USD = "USD",
  }

  let currency = Currency.ETH;
  let receiveText = "Receive 1,000,000 tokens/1 ETH";
  function switchCurrency() {
    if (currency === Currency.ETH) {
      currency = Currency.USD;
      receiveText = "Receive 357 tokens/1 USD";
    } else {
      currency = Currency.ETH;
      receiveText = "Receive 1,000,000 tokens/1 ETH";
    }
  }
</script>

<div class="wrapper">
  <div class="stacked expand">
    <div class="input-container">
      <input placeholder="0" />
      <div role="button" class="currency" on:click={switchCurrency}>
        {currency}
        <Icon name="caret" direction="e" />
      </div>
    </div>
    <small>{receiveText}</small>
  </div>
  <div class="stacked">
    <Button size="md" onClick={console.log}
      >{$projectDetails.payButtonText}</Button
    >
    {#if currency === Currency.USD}
      <small>Paid as <ETH />0.00071584</small>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    margin: 40px 0;
    display: flex;
  }

  /* TODO input asbtraction, this is semi borrowed from FormField */
  input {
    flex-grow: 1;
    margin: 0;
    font-variant: tabular-nums;
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    list-style: none;
    -webkit-font-feature-settings: "tnum", "tnum";
    font-feature-settings: "tnum", "tnum";
    position: relative;
    display: inline-block;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 1.5715;
    background-color: transparent;
    border: none;
    transition: all 0.3s;
  }

  .input-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;

    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-radius: 2px;

    margin-right: 10px;
  }
  /* TODO we want the parent to be focused when input is... */
  input:focus-visible {
    outline: none;
  }

  .input-container:focus-visible {
    border: 1px solid #3f51b5;
  }

  .expand {
    flex: 1;
  }

  .stacked {
    display: flex;
    flex-direction: column;
  }

  .stacked:last-of-type {
    text-align: center;
  }

  .currency {
    cursor: pointer;
    color: rgb(24, 180, 199);
    background: rgba(50, 200, 219, 0.267);
    font-size: 12px;
    white-space: nowrap;
    padding: 1px 6px;
    margin-left: 0px;
    margin-right: 2px;
    border-radius: 1px;

    display: flex;
    align-items: center;
  }

  :global(.currency svg) {
    margin-left: 4px;
    transform: translate(0, 1px) rotate(90deg) !important;
    width: 0.6em;
    height: 0.6em;
  }
</style>

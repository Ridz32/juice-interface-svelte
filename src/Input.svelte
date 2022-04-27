<script>
  export let label;
  export let placeholder;
  export let required = false;
</script>

<label for="name">
    {#if required}<small>*</small>{/if} {label}
</label>
<input id="name" type="text" {placeholder} />

<style>
  label {
    display: block;
    margin: 20px 0px;
  }
  small {
    font-size: 8px;
    color: red;
    vertical-align: text-top;
  }
  input {
    box-sizing: border-box;
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
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
  }
</style>

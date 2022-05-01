<script lang="ts">
  import Button from "./Button.svelte";
  import FormField from "./FormField.svelte";
  import PopInfo from "./PopInfo.svelte";
  import Select from "./Select.svelte";
  import { closeModal } from "./Modal.svelte";
  import { splits } from "./stores";

  const today = new Date().toISOString().split('T')[0];
  
  const field = {
    id: "address",
    label: "Address",
    placeholder: "juicebox.eth / 0x0000000000000000000000000000000000000000",
  };

</script>

<h3>Add a split</h3>
<section>
  <Select>
    <option>Wallet address</option>
    <option>Juicebox project</option>
  </Select>
  <FormField {field} dataStore={splits} />
  <div class="gap">
    <label for="percent">
      <PopInfo message="Percentage this payee will receive of all funds raised."
        >Percent of distribution limit</PopInfo
      >
    </label>
    <input class="gap" type="range" id="percent" min="0" max="100" />
  </div>
  <label for="lock-date" class="small-gap">Lock until</label>
  <input type="date" id="lock-date" min={today} placeholder="mm/dd/yyyy" />
  <p>
    If locked, this split can't be edited or removed until the lock expires or
    the funding cycle is reconfigured.
  </p>
</section>
<div class="actions">
  <Button onClick={closeModal} size="md" type="secondary">Cancel</Button>
  <Button size="md">Add split</Button>
</div>

<style>
  h3 {
    margin: 0;
  }
  section {
    margin: 40px 0;
  }
  label {
    display: block;
    font-weight: 400;
  }
  input[type="range"] {
    width: 100%;
    height: 5px;
    background: transparent;
  }
  input[type="date"] {
    background: var(--background-l0);
    border: 1px solid #d9d9d9;
    height: 30px;
    color: rgba(0, 0, 0, 0.6);
    padding-inline-start: 10px;
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
  .gap {
    margin: 20px 0;
  }
  .small-gap {
    margin: 10px 0;
  }
</style>

<script lang="ts">
  import DropdownInput from '$lib/components/nft-tool/input/DropdownInput.svelte';
  import FormBlock from '$lib/components/nft-tool/form-block/FormBlock.svelte';
  import RadioButton from '$lib/components/nft-tool/radio-button/RadioButton.svelte';
  import Button from '$lib/components/nft-tool/button/Button.svelte';
  import BasicCard from '$lib/components/nft-tool/card/BasicCard.svelte';
  import Form from '$lib/components/nft-tool/form/Form.svelte';
  import Input from '$lib/components/nft-tool/input/Input.svelte';
  import Textarea from '$lib/components/nft-tool/textarea/Textarea.svelte';
  import Switch from '$lib/components/nft-tool/switch/Switch.svelte';
  import QuestionIcon from '$lib/components/nft-tool/icons/QuestionIcon.svelte';

  export let disabled: boolean = false;
</script>

<BasicCard title="Create NFT">
  <small class="required-fields">* Required fields</small>
  <Form>
    <Input
      id="name"
      label="Name*"
      info={true}
      name="name"
      placeholder="Item name"
      description="Your NFT’s name"
      {disabled}
    />
    <Textarea
      id="description"
      label="Description"
      info={true}
      name="description"
      placeholder="Provide a detailed description of your item"
      rows={2}
      {disabled}
    />
    <Input
      id="external_link"
      label="External link"
      info={true}
      name="external_link"
      placeholder="https://yoursite.io/stuff/111"
      description="Your external link"
      {disabled}
    />
    <DropdownInput
      id="collection"
      label="Collection*"
      info={true}
      name="collection"
      placeholder="Select collection"
      description="Your collection’s name"
      {disabled}
    />
    <Input
      id="total_supply"
      label="Total Supply*"
      info={true}
      name="total_supply"
      placeholder="10"
      description="The number of items that can be minted"
      {disabled}
    />
    <DropdownInput id="blockchain" label="Blockchain" info={true} name="blockchain" placeholder="Ethereum" {disabled} />
    <FormBlock title="Mint Pricing" info={true}>
      <p class="description">
        Cost to mint is fixed across entire collection or use a contract to compute pricing based on some formula.
      </p>
      <div class="price-fixed-container">
        <RadioButton label="Fixed ETH Amount" {disabled} />
        <div class="price-fixed-input">
          <Input id="eth" name="eth" classes="" placeholder="ETH" {disabled} />
        </div>
      </div>
      <RadioButton label="Pricing Contract Address" {disabled} />
      <div class="contract-input">
        <Input id="contract" name="contract" classes="" placeholder="0x000000000000000" disabled />
      </div>
    </FormBlock>
    <slot />
    <FormBlock title="Properties" info={true}>
      <p class="description">
        Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
      </p>
      <div class="properties-container">
        <Input id="attribute" name="attribute" classes="" placeholder="Attribute" {disabled} />
        <Input id="property" name="property" classes="" placeholder="Property" {disabled} />
        <Button type="button" variant="outlined" size="sm" {disabled}>Delete</Button>
      </div>
      <div class="add-button-container">
        <Button type="button" variant="contained" size="lg" {disabled}>Add</Button>
      </div>
    </FormBlock>
    <FormBlock title="Levels" info={true}>
      <p class="description">
        Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
      </p>
      <div class="properties-container range-container">
        <Input id="level-name" name="level-name" classes="" placeholder="Name" {disabled} />
        <div class="range">
          <Input id="level-min" name="level-min" classes="" placeholder="0" {disabled} />
          <span class="text">of</span>
          <Input id="level-max" name="level-max" classes="" placeholder="100" {disabled} />
        </div>
        <Button type="button" variant="outlined" size="sm" {disabled}>Delete</Button>
      </div>
      <div class="add-button-container">
        <Button type="button" variant="contained" size="lg" {disabled}>Add</Button>
      </div>
    </FormBlock>
    <FormBlock title="Stats" info={true}>
      <p class="description">
        Stats show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
      </p>
      <div class="properties-container range-container">
        <Input id="stat-name" name="stat-name" classes="" placeholder="Name" {disabled} />
        <div class="range">
          <Input id="stat-min" name="stat-min" classes="" placeholder="0" {disabled} />
          <span class="text">of</span>
          <Input id="stat-max" name="stat-max" classes="" placeholder="100" {disabled} />
        </div>
        <Button type="button" variant="outlined" size="sm" {disabled}>Delete</Button>
      </div>
      <div class="add-button-container">
        <Button type="button" variant="contained" size="lg" {disabled}>Add</Button>
      </div>
    </FormBlock>
    <div class="switch-item">
      <div class="switch-title">
        <Switch />
        <span>Unlockable Content</span>
        <div class="title-icon">
          <QuestionIcon />
        </div>
      </div>
      <p class="description">Include unlockable content that can only be revealed by the owner of the item.</p>
    </div>
    <div class="switch-item">
      <div class="switch-title">
        <Switch />
        <span>Explicit & Sensitive Content</span>
        <div class="title-icon">
          <QuestionIcon />
        </div>
      </div>
      <p class="description">Set this item as explicit and sensitive content.</p>
    </div>
    <FormBlock title="Freeze metadata" info={true}>
      <p class="description">
        Freezing your metadata will allow you to permanently lock and store all of this item’s content in decentralized
        storage
      </p>
      <div class="add-button-container">
        <Button type="button" variant="outlined" size="sm" {disabled}>Freeze</Button>
      </div>
    </FormBlock>
  </Form>
</BasicCard>

<style lang="scss" scoped>
  @import './nftCreation.scss';
</style>

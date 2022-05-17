<script lang="ts">
  import DropdownInput from '$lib/components/nft-tool/input/DropdownInput.svelte';
  import FormBlock from '$lib/components/nft-tool/form-block/FormBlock.svelte';
  import UploadDropZone from '$lib/components/nft-tool/upload-drop-zone/UploadDropZone.svelte';
  import RadioButton from '$lib/components/nft-tool/radio-button/RadioButton.svelte';
  import Button from '$lib/components/nft-tool/button/Button.svelte';
  import BasicCard from '$lib/components/nft-tool/card/BasicCard.svelte';
  import Form from '$lib/components/nft-tool/form/Form.svelte';
  import Input from '$lib/components/nft-tool/input/Input.svelte';
  import Textarea from '$lib/components/nft-tool/textarea/Textarea.svelte';

  export let disabled: boolean = false;
</script>

<BasicCard title="Define Collection">
  <small class="required-fields">* Required fields</small>
  <Form>
    <Input
      id="name"
      label="Collection Name*"
      info={true}
      name="name"
      placeholder="Collection Name"
      description="Your collection’s name"
      {disabled}
    />
    <DropdownInput
      id="project"
      label="Project*"
      info={true}
      name="project"
      placeholder="Associate with a project"
      description="Associate your Collection with a project"
      {disabled}
    />
    <Textarea
      id="description"
      info={true}
      name="description"
      label="Description"
      placeholder="Provide a detailed description of your collection"
      rows={2}
      {disabled}
    />
    <UploadDropZone
      title="Upload image"
      desc="JPG, PNG, GIF, SVG"
      label="Collection Logo"
      info={true}
      description="This image will also be used for navigation. 350 x 350 recommended"
      {disabled}
    />
    <UploadDropZone
      title="Upload image"
      desc="JPG, PNG, GIF, SVG"
      label="Default Image"
      info={true}
      description="This image will be used for featuring your collection on the homepage, category pages. 600 x 400 recommended"
      {disabled}
    />
    <UploadDropZone
      title="Upload image"
      desc="JPG, PNG, GIF, SVG"
      label="Banner Image"
      info={true}
      description="This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended"
      {disabled}
    />
    <DropdownInput
      id="category"
      label="Category*"
      info={true}
      name="category"
      placeholder="Associated with a category"
      description="Adding a category will help make your item discoverable "
      {disabled}
    />
    <Input
      id="twitter"
      label="Twitter*"
      info={true}
      name="twitter"
      placeholder="@twittername"
      description="Your project’s Twitter handle"
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
    <Input
      id="discord"
      label="Discord"
      info={true}
      name="external_link"
      placeholder="https://discord.gg/discordname"
      description="An invite link to your project’s Discord server"
      {disabled}
    />
    <Input
      id="instagram"
      label="Instagram"
      info={true}
      name="instagram"
      placeholder="@instagram_name"
      description="Your projects’s Instagram handle"
      {disabled}
    />
    <Input
      id="medium"
      label="Medium"
      info={true}
      name="medium"
      placeholder="@medium_handle"
      description="Your Medium’s handle"
      {disabled}
    />
    <Input
      id="royalty"
      label="Royalty"
      info={true}
      name="royalty"
      placeholder="5"
      description="Percentage fee. Collect a fee when a user re-sells an item you originally created"
      {disabled}
    />
    <FormBlock title="Default color" info={true}>
      <div class="color-manual-container">
        <RadioButton label="Enter value in HEX" {disabled} />
        <div class="color-manual-input">
          <Input id="color" name="color" classes="" placeholder="#57fcd5" disabled />
          <Button type="button" color="primary" size="sm" {disabled}>Add</Button>
        </div>
      </div>
      <RadioButton label="Pick a palette" {disabled} />
    </FormBlock>
    <FormBlock title="Custom layout" info={true}>
      <p class="description">Use custom CSS to change the way your collection is viewed.</p>
      <Textarea
        name="custom-layout"
        id="custom-layout"
        placeholder="Provide a detailed description of your item"
        rows={5}
        {disabled}
      />
    </FormBlock>
    <div class="button-container">
      <Button type="button" color="primary" variant="outlined" size="sm" {disabled}>Preview</Button>
      <Button type="button" color="primary" size="sm" {disabled}>Discard</Button>
      <Button type="button" color="primary" size="sm" {disabled}>Create</Button>
    </div>
  </Form>
</BasicCard>

<style lang="scss" scoped>
  @import './collectionCreation.scss';
</style>

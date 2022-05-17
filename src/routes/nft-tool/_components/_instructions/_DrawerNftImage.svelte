<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Drawer from '$lib/components/nft-tool/drawer/Drawer.svelte';
  import Message from '$lib/components/nft-tool/messages/Message.svelte';
  import BasicCard from '$lib/components/nft-tool/card/BasicCard.svelte';
  import Input from '$lib/components/nft-tool/input/Input.svelte';
  import Button from '$lib/components/nft-tool/button/Button.svelte';
  import RadioButton from '$lib/components/nft-tool/radio-button/RadioButton.svelte';
  import AdvancedModeCard from '$lib/components/nft-tool/card/AdvancedModeCard.svelte';
  import CollectionCreation from '$lib/components/nft-tool/creation-forms/CollectionCreation.svelte';
  import FormBlock from '$lib/components/nft-tool/form-block/FormBlock.svelte';
  import NftCreation from '$lib/components/nft-tool/creation-forms/NftCreation.svelte';
  import QuestionIcon from '$lib/components/nft-tool/icons/QuestionIcon.svelte';

  export let openDrawer: boolean;
  export let card: any;

  const dispath = createEventDispatcher();
  const closeDrawer = () => {
    dispath('close', {
      ...card,
    });
    openDrawer = false;
  };
</script>

<Drawer open={openDrawer} on:clickAway={closeDrawer} size="650px">
  <button class="close-button" on:click={closeDrawer}>x</button>
  <div class="container">
    <h2 class="drawer-title">Instructions on Image NFT</h2>
    <Message icon={true}
      ><p>The most basic type of NFT which is comprised of the asset, metadata and containing collection.</p>
      <br />
    </Message>
    <BasicCard title="Collections">
      <p class="card-text">
        Image NFT is an image with metadata contained within a collection. If a collection is not defined then you will
        be asked to do so prior to continuing.
      </p>
    </BasicCard>
    <AdvancedModeCard disabled={true} />
    <CollectionCreation disabled={true} />
    <BasicCard title="Image asset">
      <p class="card-text">
        Each image is a composition of the information you provide in the following form. Be aware that properties and
        their values have to be entered for each image manually. If the image belongs to a large collection of images,
        it maybe useful to checkout the PFP NFT workflow.
      </p>
    </BasicCard>
    <NftCreation disabled={true}>
      <FormBlock title="Image NFT" info={true}>
        <p class="description">Review the Image to ensure the NFT rendering is as expected.</p>
        <span class="label">
          Preview
          <div class="label-icon">
            <QuestionIcon />
          </div>
        </span>
        <img src="/assets/meow.png" alt="" class="image" />
        <FormBlock title="Output format" info={true}>
          <div class="output-form">
            <div class="output-row">
              <RadioButton label="Image" disabled={true} />
              <div class="input">
                <Input id="image-format" name="image-format" classes="" placeholder="PNG" disabled={true} />
              </div>
            </div>
            <div class="output-row">
              <RadioButton label="Video" disabled={true} />
              <div class="input">
                <Input id="video-format" name="video-format" classes="" placeholder="MP4" disabled={true} />
              </div>
            </div>
          </div>
          <Input
            id="output-resolution"
            name="output-resolution"
            label="Output resolution"
            info={true}
            placeholder="1000x1000"
            disabled={true}
            description="Output resolution"
          />
        </FormBlock>
      </FormBlock>
    </NftCreation>
    <BasicCard title="Continue">
      <p class="card-text">Now that you have read about how to create an Image NFT, continue to the workflow.</p>
      <div class="button-container">
        <Button type="button" color="primary">Create</Button>
      </div>
    </BasicCard>
  </div>
</Drawer>

<style lang="scss" scoped>
  @import './drawers.scss';
  .image {
    border-radius: 10px;
    margin-bottom: 25px;
  }
</style>

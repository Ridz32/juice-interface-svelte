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
  import NftCreation from '$lib/components/nft-tool/creation-forms/NftCreation.svelte';
  import FormBlock from '$lib/components/nft-tool/form-block/FormBlock.svelte';
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
    <h2 class="drawer-title">Instructions on p5.js NFT</h2>
    <Message>The most basic type of NFT which is comprised of the asset, metadata and containing collection.</Message>
    <BasicCard title="Collections">
      <p>
        p5.js NFT is an music/video with metadata contained within a collection. If a collection is not defined then you
        will be asked to do so prior to continuing.
      </p>
    </BasicCard>
    <AdvancedModeCard disabled={true} />
    <CollectionCreation disabled={true} />
    <BasicCard title="p5.js asset">
      <p>
        Each p5.js is a composition of the information you provide in the following form. Be aware that properties and
        their values have to be entered for each item manually. If the item belongs to a large collection of items, it
        maybe useful to checkout the PFP NFT workflow.
      </p>
    </BasicCard>
    <NftCreation disabled={true}>
      <FormBlock title="p5.js script" info={true}>
        <p class="description">
          Review the p5.js script to ensure the NFT rendering is as expected. <a href="https://p5js.org/">Learn more.</a
          >
        </p>
        <div class="preview-p5js">
          <img src="/assets/p5js.png" alt="" />
          <div class="button-container">
            <Button type="button" variant="contained" color="primary" disabled={true}>Play</Button>
          </div>
        </div>
        <FormBlock title="Capture Timing" info={true}>
          <RadioButton label="Restart each time" disabled={true} />
          <div class="compound-input">
            <RadioButton label="Delay" disabled={true} />
            <div class="input">
              <Input id="capture-delay" name="capture-delay" classes="" placeholder="10" disabled={true} />
            </div>
            <span class="text"> secs, every </span>
            <div class="input">
              <Input id="capture-repeat" name="capture-repeat" classes="" placeholder="3" disabled={true} />
            </div>
            <span class="text">seconds</span>
          </div>
        </FormBlock>
        <span class="label">
          Preview
          <div class="label-icon">
            <QuestionIcon />
          </div>
        </span>
        <img src="/assets/p5js-preview.png" alt="" />
      </FormBlock>
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
    </NftCreation>
    <BasicCard title="Continue">
      <p class="card-text ">Now that you have read about how to create an p5.js NFT, continue to the workflow.</p>
      <div class="button-container">
        <Button type="button" color="primary">Create</Button>
      </div>
    </BasicCard>
  </div>
</Drawer>

<style lang="scss" scoped>
  @import './drawers.scss';
</style>

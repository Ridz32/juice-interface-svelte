<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Drawer from '$lib/components/nft-tool/drawer/Drawer.svelte';
  import Message from '$lib/components/nft-tool/messages/Message.svelte';
  import BasicCard from '$lib/components/nft-tool/card/BasicCard.svelte';
  import Input from '$lib/components/nft-tool/input/Input.svelte';
  import Button from '$lib/components/nft-tool/button/Button.svelte';
  import AdvancedModeCard from '$lib/components/nft-tool/card/AdvancedModeCard.svelte';
  import CollectionCreation from '$lib/components/nft-tool/creation-forms/CollectionCreation.svelte';
  import NftCreation from '$lib/components/nft-tool/creation-forms/NftCreation.svelte';
  import FormBlock from '$lib/components/nft-tool/form-block/FormBlock.svelte';
  import RadioButton from '$lib/components/nft-tool/radio-button/RadioButton.svelte';
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
    <h2 class="drawer-title">Instructions on Music/Video NFT</h2>
    <Message icon={true}
      ><p>The most basic type of NFT which is comprised of the asset, metadata and containing collection.</p>
      <br /></Message
    >
    <BasicCard title="Collections">
      <p class="card-text">
        Music/Video NFT is an music/video with metadata contained within a collection. If a collection is not defined
        then you will be asked to do so prior to continuing.
      </p>
    </BasicCard>
    <AdvancedModeCard disabled={true} />
    <CollectionCreation disabled={true} />
    <BasicCard title="Music/Video asset">
      <p class="card-text">
        Each item is a composition of the information you provide in the following form. Be aware that properties and
        their values have to be entered for each item manually. If the item belongs to a large collection of items, it
        maybe useful to checkout the PFP NFT workflow.
      </p>
    </BasicCard>
    <NftCreation disabled={true}>
      <FormBlock title="Music/Video" info={true}>
        <p class="description">Review the Music/Video to ensure the NFT rendering is as expected.</p>
        <div class="audio-preview">
          <audio controls src="/assets/both_worlds.mp3" />
        </div>
        <span class="label">
          Preview
          <div class="label-icon">
            <QuestionIcon />
          </div>
        </span>
        <p class="description">
          Because you’ve included multimedia, you’ll need to provide an image (PNG, JPG, or GIF) for the card display of
          your item.
        </p>
        <img src="/assets/music-meow.png" alt="" class="album-cover" />
        <div class="audio-preview">
          <audio controls src="/assets/both_worlds.mp3" />
        </div>
        <FormBlock title="Playback" info={true}>
          <RadioButton label="Play once" disabled={true} />
          <div class="compound-input">
            <RadioButton label="Play" disabled={true} />
            <div class="input">
              <Input id="play-times" name="play-times" classes="" placeholder="5" disabled={true} />
            </div>
            <span class="text">times</span>
          </div>
          <RadioButton label="Repeat" disabled={true} />
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
      </FormBlock>
    </NftCreation>
    <BasicCard title="Continue">
      <p class="card-text">Now that you have read about how to create an Music/Video NFT, continue to the workflow.</p>
      <div class="button-container">
        <Button type="button" color="primary">Create</Button>
      </div>
    </BasicCard>
  </div>
</Drawer>

<style lang="scss" scoped>
  @import './drawers.scss';

  .audio-preview {
    width: 100%;
    margin: 10px 0;
    display: flex;

    audio {
      border-radius: 10px;
      flex-basis: 100%;
    }
  }

  .album-cover {
    border-radius: 10px;
  }
</style>

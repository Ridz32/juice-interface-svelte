<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Drawer from '$lib/components/nft-tool/drawer/Drawer.svelte';
  import Message from '$lib/components/nft-tool/messages/Message.svelte';
  import BasicCard from '$lib/components/nft-tool/card/BasicCard.svelte';
  import Button from '$lib/components/nft-tool/button/Button.svelte';
  import AdvancedModeCard from '$lib/components/nft-tool/card/AdvancedModeCard.svelte';
  import CollectionCreation from '$lib/components/nft-tool/creation-forms/CollectionCreation.svelte';
  import NftCreation from '$lib/components/nft-tool/creation-forms/NftCreation.svelte';

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
    <h2 class="drawer-title">Instructions on PFP NFT</h2>
    <Message>The most basic type of NFT which is comprised of the asset, metadata and containing collection.</Message>
    <BasicCard title="Collections">
      <p>
        Image NFT is an image with metadata contained within a collection. If a collection is not defined then you will
        be asked to do so prior to continuing.
      </p>
    </BasicCard>
    <AdvancedModeCard disabled={true} />
    <CollectionCreation disabled={true} />
    <BasicCard title="Image asset">
      <p>
        Each image is a composition of the information you provide in the following form. Be aware that properties and
        their values have to be entered for each image manually. If the image belongs to a large collection of images,
        it maybe useful to checkout the PFP NFT workflow.
      </p>
    </BasicCard>
    <NftCreation disabled={true} />
    <BasicCard title="Continue">
      <p class="card-text">Now that you have read about how to create an PFP NFT, continue to the workflow.</p>
      <div class="button-container">
        <Button type="button" color="primary">Create</Button>
      </div>
    </BasicCard>
  </div>
</Drawer>

<style lang="scss" scoped>
  @import './drawers.scss';
  .preview-p5js {
    margin-bottom: 12px;

    img {
      width: 100%;
    }
  }
</style>

<script lang="ts">
  import Button from '$lib/components/nft-tool/button/Button.svelte';
  import Card from '$lib/components/nft-tool/card/Card.svelte';
  import Message from '$lib/components/nft-tool/messages/Message.svelte';
  import DrawerNftImage from './_DrawerNftImage.svelte';
  import DrawerNftMusic from './_DrawerNftMusic.svelte';
  import DrawerNftP5 from './_DrawerNftP5.svelte';
  import DrawerNftPfp from './_DrawerNftPFP.svelte';
  import { ChevronRightIcon } from 'svelte-feather-icons';

  let cards = [
    {
      title: 'Image NFT',
      description: 'PNG, JPEG, SVG are valid types of assets',
      component: DrawerNftImage,
      openDrawer: false,
      checked: false,
    },
    {
      title: 'Music/Video NFT',
      description: 'Multimedia including mp4, mp3, wav, are valid types of assets',
      component: DrawerNftMusic,
      openDrawer: false,
      checked: false,
    },
    {
      title: 'p5.js NFT',
      description: 'Open Processing scripts used on sites like Artblocks.io',
      component: DrawerNftP5,
      openDrawer: false,
      checked: false,
    },
    {
      title: 'PFP NFT',
      description: 'Image assets which are randomly, or generatively composed for a pfp',
      component: DrawerNftPfp,
      openDrawer: false,
      checked: false,
    },
  ];

  const handleClick = card => () => {
    cards = cards.map(c => {
      if (c.title === card.title) {
        return { ...c, ...{ openDrawer: !card.openDrawer, checked: true } };
      }
      return c;
    });
  };

  const handleCloseDrawer = ({ detail }) => {
    cards = cards.map(c => {
      if (c.title === detail.title) {
        return { ...c, ...{ openDrawer: !detail.openDrawer } };
      }
      return c;
    });
  };
</script>

<div class="instructions">
  <Message icon={true}>
    Review the instructions below for the specific type of NFT you intend to create. You can not change the contents
    after you mint.
  </Message>
  {#each cards as card}
    <Card title={card.title} desc={card.description} onclick={handleClick(card)} checked={card.checked} />
    <svelte:component this={card.component} openDrawer={card.openDrawer} {card} on:close={handleCloseDrawer} />
  {/each}
</div>

<div class="footer">
  <div class="group">
    <Button variant="outlined" size="sm">Back</Button>
    <Button size="sm">
      <ChevronRightIcon size="1x"/>
      Type
    </Button>
    <Button size="sm">
      <ChevronRightIcon size="1x"/>
      Collection
    </Button>
    <Button size="sm">
      <ChevronRightIcon size="1x"/>
      Metadata
    </Button>
    <Button size="sm">
      <ChevronRightIcon size="1x"/>
      Review
    </Button>
  </div>
</div>

<style lang="scss">
  .footer {
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.11);
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    min-height: 80px;
    display: flex;
    align-items: center;
    padding: 0 80px;
    background: #FBF9F6;
  }
</style>

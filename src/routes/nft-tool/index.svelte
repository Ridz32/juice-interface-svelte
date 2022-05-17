<script lang="ts">
  import Tab from '$lib/components/nft-tool/tabs/Tab.svelte';
  import Tabs from '$lib/components/nft-tool/tabs/Tabs.svelte';
  import Instructions from './_components/_instructions/_Instructions.svelte';

  let tabs = [
    { label: 'Instructions', value: 1, component: Instructions },
    { label: 'Create', value: 2, component: Tab },
    { label: 'Preview', value: 3, component: Tab },
    { label: 'Mint', value: 4, component: Tab },
  ];
</script>

<div class="container">
  <h2>Create your NFT</h2>

  <Tabs items={tabs} />
</div>

<style>
  .container {
    margin: 6px 155px;
  }
</style>

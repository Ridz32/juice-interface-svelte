<script lang="ts">
  import ErrorMessage from '$lib/components/nft-tool/errors/ErrorMessage.svelte';
  import { createEventDispatcher } from 'svelte';
  import { InfoIcon } from 'svelte-feather-icons';

  export let label = '';
  export let id: string;
  export let name: string;
  export let value = '';
  export let placeholder: string;
  export let info = false;
  export let rows: number = 5;
  export let disabled: boolean = false;

  let error = '';

  const dispatch = createEventDispatcher();

  const handleInput = ({ target }) => {
    value = target.value;
  };

  const handleKeypress = ({ charCode }) => {
    if (charCode === 13) dispatch('submit');
  };
</script>

<div class="textarea-item" class:no-margin={!label}>
  {#if label}
    <label for={id}
      >{label}
      {#if info}
        <InfoIcon size="1.2x" />
      {/if}
    </label>
  {/if}
  <textarea class:has-error={error} {name} {id} {value} {placeholder} {rows} cols="33" {disabled} />
  {#if error.length}
    <ErrorMessage {error} />
  {/if}
</div>

<style lang="scss" scoped>
  @import './textarea';
</style>

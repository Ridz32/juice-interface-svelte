<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ChevronDownIcon } from 'svelte-feather-icons';
  import QuestionIcon from '$lib/components/nft-tool/icons/QuestionIcon.svelte';
  import { clickOutside } from '$lib/utils/clickOutside';

  export let label = '';
  export let id: string;
  export let value = '';
  export let placeholder: string;
  export let type = 'text';
  export let name: string;
  export let info = false;
  export let classes = 'margin';
  export let description: string = '';
  export let disabled: boolean = false;
  export let options: string[] = [];

  let openDropdown: boolean = false;
  const expand = () => {
    if (!disabled && options.length > 0) {
      openDropdown = !openDropdown;
    }
  };
  const selectOption = option => {
    value = option;
    collapse();
  };

  const collapse = () => {
    openDropdown = false;
  };

  const dispatch = createEventDispatcher();

  const handleInput = ({ target }) => {
    value = target.value;
  };

  const handleKeypress = ({ charCode }) => {
    if (charCode === 13) dispatch('submit');
  };
</script>

<div class={`input-item ${classes}`}>
  {#if label}
    <label for={id}>
      {label}
      {#if info}
        <div class="label-icon">
          <QuestionIcon />
        </div>
      {/if}
    </label>
  {/if}
  <div class="dropdown-container" use:clickOutside={{ enabled: openDropdown, cb: collapse }}>
    <input {id} on:keypress={handleKeypress} on:input={handleInput} {value} {type} {placeholder} {disabled} />
    <div class="dropdown-icon" on:click={expand}>
      <ChevronDownIcon size="1x" />
    </div>
    {#if openDropdown}
      <div class="dropdown-selection">
        {#each options as option}
          <span class="option" on:click={() => selectOption(option)}>{option}</span>
        {/each}
      </div>
    {/if}
  </div>
  {#if description}
    <p class="description">{description}</p>
  {/if}
</div>

<style lang="scss" scoped>
  @import './dropdown.scss';
</style>

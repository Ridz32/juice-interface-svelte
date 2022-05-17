<script lang="ts">
  import ErrorMessage from '$lib/components/nft-tool/errors/ErrorMessage.svelte';
  import QuestionIcon from '$lib/components/nft-tool/icons/QuestionIcon.svelte';
  import { createEventDispatcher } from 'svelte';

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
  let error = '';

  const dispatch = createEventDispatcher();

  const handleInput = ({ target }) => {
    value = target.value;
  };

  const handleKeypress = ({ charCode }) => {
    if (charCode === 13) dispatch('submit');
  };

  const handleChange = async (event: any) => {
    // const errors = await checkValidity($projectConfigForm);
    // if (errors[name]) {
    //   error = errors[name];
    // } else {
    //   error = '';
    // }
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
  <input
    class:has-error={error}
    {id}
    on:change={e => handleChange(e)}
    on:blur={e => handleChange(e)}
    on:keypress={handleKeypress}
    on:input={handleInput}
    {value}
    {type}
    {placeholder}
    {disabled}
  />
  {#if description}
    <p class="description">{description}</p>
  {/if}
  {#if error.length}
    <ErrorMessage {error} />
  {/if}
</div>

<style lang="scss" scoped>
  @import './input.scss';
</style>

<script lang="ts">
  import { UploadIcon } from 'svelte-feather-icons';
  import Dropzone from 'svelte-file-dropzone';
  import QuestionIcon from '$lib/components/nft-tool/icons/QuestionIcon.svelte';

  export let label: string = '';
  export let title: string;
  export let desc: string;
  export let info = false;
  export let description: string = '';
  export let disabled: boolean = true;
</script>

<div class="dropzone">
  {#if label}
    <span class="label">
      {label}
      {#if info}
        <div class="label-icon">
          <QuestionIcon />
        </div>
      {/if}
    </span>
  {/if}
  <Dropzone {disabled}>
    <div class="upload-zone">
      <div class="upload-icon">
        <UploadIcon size="2x" />
      </div>
      <div class="upload-title">
        {title}
      </div>
      <div class="upload-desc">
        {desc}
      </div>
    </div>
  </Dropzone>
  {#if description}
    <span class="description">
      {description}
    </span>
  {/if}
</div>

<style lang="scss" scoped>
  .dropzone {
    margin-bottom: 25px;
  }
  .upload-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    .upload-icon {
      color: #18b4c7;
    }
    .upload-title {
      font-size: 14px;
      color: #000000;
    }
    .upload-desc {
      font-size: 11px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .label {
    margin-left: 2px;
    margin-bottom: 10px;
    color: var(--text-header);
    font-size: 14px;
    font-weight: 500;
    display: flex;

    .label-icon {
      display: flex;
      align-items: center;
      margin-left: 15px;
    }
  }
  .description {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 6px;
  }
</style>

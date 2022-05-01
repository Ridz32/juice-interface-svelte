<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "./Icon.svelte";
  export let onChange: (src: string) => void;

  let file: HTMLInputElement;
  let isFileSet = false;
  onMount(() => {
    file.addEventListener("change", (e) => {
      // Get the selected file
      const [file] = (e.target as HTMLInputElement).files;
      // Get the file name and size
      const { name: fileName, size } = file;
      // Convert size in bytes to kilo bytes
      const fileSize = (size / 1000).toFixed(2);
      // Set the text content
      const fileNameAndSize = `${fileName} - ${fileSize}KB`;
      loadFile(file);
      document.querySelector(".file-name").textContent = fileNameAndSize;
    });
  });

  var loadFile = function (file: Blob | MediaSource) {
    // Get src url
    const src = URL.createObjectURL(file);
    if(onChange) {
      onChange(src);
    }
    // Set preview image
    let image = document.getElementById("output") as HTMLImageElement;
    image.src = src;
    isFileSet = true;
  };
</script>

<label for="icon"
>Logo
<input bind:this={file} id="icon" type="file" />
<div>
    <Icon name="fileImage" />
    <span>Upload</span>
</div>
</label>
<img id="output" class={isFileSet && 'file-preview'} src="" alt="Uploaded logo" />

<style>
  input[type="file"] {
    display: none;
  }

  div {
    color: var(--text-over-action-secondary);
    margin: 20px;
    cursor: pointer;
  }

  img {
      display: none;
  }

  .file-preview {
    display: inline-block;
    max-height: 100px;
  }
</style>

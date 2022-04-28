<script lang="ts">
  import { onMount } from "svelte";

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
    let image = document.getElementById("output") as HTMLImageElement;
    image.src = URL.createObjectURL(file);
    isFileSet = true;
  };
</script>

<label for="icon"
>Logo
<input bind:this={file} id="icon" type="file" />
<div>
    <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="file-image"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    ><path
    d="M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 00-12.6 0l-99.8 127.2a7.98 7.98 0 006.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 00-12.7 0zM360 442a40 40 0 1080 0 40 40 0 10-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"
    /></svg
    >
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

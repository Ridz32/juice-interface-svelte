<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { ipfsCidUrl, pinFileToIpfs } from '$utils/ipfs';

	export let onChange: (src: string) => void;

	let problem: string | undefined;
	let loading = false;

	let file: HTMLInputElement;
	let isFileSet = false;
	onMount(() => {
		file.addEventListener('change', async (e) => {
			loading = true;
			// Get the selected file
			const [file] = (e.target as HTMLInputElement).files;
			// Get the file name and size
			const { name: fileName, size } = file;
			// Convert size in bytes to kilo bytes
			const fileSize = size / 1000;
			if (fileSize > 500) {
				problem = 'File size must be less than 500 KB';
				isFileSet = false;
				loading = false;
				return;
			} else {
				problem = undefined;
			}
			// Set the text content
			const res = await pinFileToIpfs(file);
			const ipfsUrl = res?.IpfsHash;
			loading = false;
			loadFile(res?.IpfsHash);
			document.querySelector('.file-name').textContent = ipfsCidUrl(res?.IpfsHash);
			(document.querySelector('.file-name') as HTMLAnchorElement).href = ipfsUrl;
		});
	});

	function loadFile(cid: string) {
		if (onChange) {
			onChange(cid);
		}
		// Set preview image
		let image = document.getElementById('output') as HTMLImageElement;
		image.src = ipfsCidUrl(cid);
		isFileSet = true;
	}
</script>

{#if loading}
	<Icon name="loading" spin />
{/if}
<label for="icon"
	>Logo
	<input bind:this={file} id="icon" type="file" />
	<div>
		<Icon name="fileImage" />
		<span>Upload</span>
	</div>
</label>
<div class="preview-wrapper">
	<img id="output" class={isFileSet && 'file-preview'} src="" alt="Uploaded logo" />
	<a class="file-name" />
</div>
{#if problem}
	<Icon name="exclamation-circle" />
	{problem}
{/if}

<style>
	input[type='file'] {
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
	.preview-wrapper {
		display: flex;
		gap: 20px;
		align-items: center;
		width: 350px;
		word-wrap: break-word;
	}
	.file-name {
		max-width: 100%;
	}
	.file-preview {
		display: inline-block;
		max-height: 100px;
	}
</style>

<script context="module" lang="ts">
	export function getTruncatedAddress(address: string) {
		return `${address.slice(0, 6)}...${address.slice(-6)}`;
	}
</script>

<script lang="ts">
	let data: HTMLElement;
	$: {
		data.innerText = getTruncatedAddress(data?.innerText);
	}
</script>

<div bind:this={data}><slot /></div>

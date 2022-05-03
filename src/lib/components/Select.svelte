<script lang="ts">
	export let onSelect: (value: any) => void = () => {};
	export let value: any;
</script>

<select on:select={onSelect} bind:value>
	<slot />
</select>

<style>
	select {
		background: transparent;
		border: 1px solid #d9d9d9;
		border-radius: 2px;
		color: rgba(0, 0, 0, 0.85);
		font-variant: tabular-nums;
		font-family: inherit;
		font-size: 14px;
		font-weight: 300;
		height: 30px;
		width: 100%;
	}
</style>

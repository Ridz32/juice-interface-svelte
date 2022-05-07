<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Popover from './Popover.svelte';

	export let message: string;
</script>

<div>
	<slot />
	<Popover {message}
		><div class="gap">
			<Icon name="questionCircle" />
		</div></Popover
	>
</div>

<style>
	div {
		display: flex;
		align-items: baseline;
	}
	.gap {
		margin-left: 10px;
	}
</style>

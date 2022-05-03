<script lang="ts">
	export let message: string;
	export let placement: 'left' | 'right' | 'top' | 'bottom' = 'left';
</script>

<div class="wrapper">
	<slot />
	<div class={`content ${placement}`}>
		<p class="message">{message}</p>
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		display: inline-block;
	}
	.content {
		opacity: 0;
		visibility: hidden;
		position: absolute;
		transform: translate(0, 10px);
		padding: 12px 16px;

		background: var(--background-l0);
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
		width: 170px;
	}

	.left {
		top: -20px;
		left: -170px;
		transform: translate(0, -20px);
	}

	.right {
		top: -20px;
		right: -170px;
		transform: translate(0, 20px);
	}

	.wrapper:hover .content {
		z-index: 10;
		opacity: 1;
		visibility: visible;
		transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
	}
	.message {
		/* font-family: 'DM Mono', monospace; */
		font-size: 11px;
		color: var(--text-primary);
		margin: 0;
	}
</style>

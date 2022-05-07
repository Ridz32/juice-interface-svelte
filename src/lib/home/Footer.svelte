<script>
	import { darkMode } from '$stores';
</script>

<div class="image">
	<img
		src={$darkMode ? '/images/orange_lady-od.png' : '/images/orange_lady-ol.png'}
		alt="Powerlifting orange hitting an olympic deadlift"
	/>
</div>

<style>
	img {
		height: 40vh;
		max-height: 400px;
		min-height: 300px;
		max-width: 100%;
		object-fit: contain;
		object-position: center center;
		margin-bottom: -10px;
	}

	.image {
		display: flex;
		justify-content: center;
	}
</style>

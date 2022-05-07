<script>
	import { darkMode } from '$stores';
</script>

<div class="image">
	<img
		src={$darkMode ? '/images/orange_lady-od.png' : '/images/orange_lady-ol.png'}
		alt="Powerlifting orange hitting an olympic deadlift"
	/>
</div>
<footer>
	<p>🧃⚡️</p>
	<h3>
		Big ups to the Ethereum community for crafting the infrastructure and economy to make Juicebox
		possible.
	</h3>
</footer>

<style>
    footer {
        padding: 40px 20px;
        background: black;
        position: absolute;
        width: 100vw;
    }
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

    h3 {
        color: whitesmoke;
        text-align: center;
    }

	p {
		text-align: center;
        font-size: 20px;
	}
</style>

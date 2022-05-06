<section>
	<article>
		<div class="image-wrapper">
			<img src="/images/green_orange.png" alt="green_orange" />
		</div>
		<div class="projects">
			<h1>Trending projects</h1>
			<ul>
				<div class="test" />
				<div class="test" />
				<div class="test" />
				<div class="test" />
				<div class="test" />
				<div class="test" />
			</ul>
		</div>
	</article>
</section>

<style>
	h1 {
		color: var(--text-header);
		font-weight: 600;
		margin-left: 40px;
	}

	article {
		margin: auto;
		max-width: 1200px;
		display: flex;
	}

	section {
		margin: 150px 0px;
		padding: 40px 40px 0px;
		background: var(--background-l2);
	}

	img {
		display: none;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.test {
		min-width: 300px;
		height: 150px;
		background: var(--background-l0);
	}

	@media (min-width: 992px) {
		img {
			display: block;
			height: 550px;
		}

		.image-wrapper {
			display: flex;
			align-items: flex-end;
			justify-content: center;
		}

		.projects {
			display: block;
			flex: 0 0 62.5%;
			max-width: 62.5%;
		}
	}
</style>

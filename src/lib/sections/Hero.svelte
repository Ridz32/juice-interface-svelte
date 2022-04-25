<script lang="ts">
	import Button from '$lib/utils/Button.svelte';
	import Image from '$lib/utils/Image.svelte';
</script>

<div class="section-wrapper">
	<div class="section">
		<div><Image src="/logo.svg" /></div>
		<a href="https://oneof.com" target="_blank" rel="noopener noreferrer">
			Lorem ipsum dolor sit amet consectetur.
			<Image src="/icons/arrow.svg" />
		</a>
		<h1>Lorem ipsum dolor sit.</h1>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas quod labore tempora est, totam tenetur enim praesentium harum reiciendis similique eos dignissimos. Laborum dicta obcaecati earum vero repellendus nam, corrupti veniam sed aut vel, illo veritatis eveniet, cupiditate voluptatum?</p>
		<i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ullam laboriosam recusandae iure rem quaerat provident nesciunt? Dolore expedita tempore animi voluptatibus sit at eligendi? <i><a href="https://example.com" target="_blank" rel="noopener noreferrer">some link.</a></i>
		<br>
		<br>
		<Button disabled>Connect Wallet to Claim Tokens</Button>
	</div>
</div>

<style>
	.section-wrapper {
		min-height: calc(100vh - (70px - 2rem) - 150px);
	}
	.section {
		max-width: 750px;
		margin: 0px auto 50px auto;
		text-align: center;
		padding: 1rem;
	}
	.section > div {
		margin: 2.5rem;
	}
	.section > a {
		color: #9e9e9e;
		font-weight: 800;
		font-size: 18px;
		-webkit-transition: 100ms ease;
		-moz-transition: 100ms ease;
		transition: 100ms ease;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	.section > h1 {
		font-size: 44px;
		font-weight: bold;
		line-height: 1.2;
		margin: 1rem;
		color: #202020;
	}
	.section > p {
		text-align: justify;
		font-size: 18px;
		color: #717171;
		line-height: 1.5;
		margin: 1rem;
	}
	.section > i {
		text-align: justify;
		font-size: 15px;
		color: #717171;
		line-height: 1.5;
		margin: 1rem;
	}
</style>

<script>
	import ExternalLink from '$lib/components/ExternalLink.svelte';
</script>

<section>
	<div class="left">
		<img src="/images/pina.png" alt="Pinepple geek artist holding a paintbrush" />
	</div>
	<div class="right">
		<h1>Programmable spending</h1>
		<p>
			Commit portions of your funds to the people or projects you want to support, or the
			contributors you want to pay. When you get paid, so do they.
		</p>
		<p />
		<h1>ERC-20 community tokens</h1>
		<p>
			When someone pays your project, they'll receive your project's tokens in return. Tokens can be
			redeemed for a portion of your project's overflow funds; when you win, your community wins
			with you. Leverage your project's token to grant governance rights, community access, or other
			membership perks.
		</p>
		<p />
		<h1>Redistributable surplus</h1>
		<p>
			Set a funding target to cover predictable expenses. Any extra funds (<a href="">overflow</a>)
			can be claimed by anyone holding your project's tokens alongside you.
		</p>
		<p />
		<h1>Transparency & accountability</h1>
		<p>
			Changes to your project's funding configuration require a community-approved period to take
			effect, which acts as a safeguard against rug pulls. Your supporters don't have to trust you —
			even though they already do.
		</p>
		<p />

		<p>
			Note: Juicebox is new, unaudited, and not guaranteed to work perfectly. Before spending money,
			do your own research:
			<ExternalLink href="https://discord.gg/6jXrJSyDFf">ask questions</ExternalLink>,
			<ExternalLink href="https://github.com/jbx-protocol/juice-interface"
				>check out the code</ExternalLink
			>, and understand the risks!¯
		</p>
	</div>
</section>

<style>
	h1 {
		color: var(--text-header);
	}
	p {
		font-weight: 300;
	}
	section {
		padding: 60px 40px 40px;
		margin-top: 40px;
		margin-bottom: 40px;
		max-width: 1200px;
		display: flex;
		align-items: center;
		margin: auto;
	}
	img {
		max-height: 480px;
		max-width: 100%;
		object-fit: contain;
		margin-bottom: 40px;
	}
	.left {
		display: block;
		flex: 0 0 42%;
		max-width: 42%;
	}
	.right {
		flex: 0 0 58%;
	}

	/* On smaller screens full size */
	@media (max-width: 700px) {
		img {
			flex: 0 0 100%;
		}
	}
</style>

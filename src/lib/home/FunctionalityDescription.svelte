<script>
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import Trans from '$lib/components/Trans.svelte';
</script>

<section>
	<div class="left">
		<img src="/images/pina.png" alt="Pinepple geek artist holding a paintbrush" />
	</div>
	<div class="right">
		<h1><Trans>Programmable spending</Trans></h1>
		<p>
			<Trans>
				Commit portions of your funds to the people or projects you want to support, or the
				contributors you want to pay. When you get paid, so do they.
			</Trans>
		</p>
		<p />
		<h1><Trans message="ERC-20 community tokens" /></h1>
		<p>
			<Trans>
				When someone pays your project, they'll receive your project's tokens in return. Tokens can
				be redeemed for a portion of your project's overflow funds; when you win, your community
				wins with you. Leverage your project's token to grant governance rights, community access,
				or other membership perks.
			</Trans>
		</p>
		<p />
		<h1><Trans>Redistributable surplus</Trans></h1>
		<p>
			<Trans
				message={"Set a funding target to cover predictable expenses. Any extra funds (<0>overflow</0>) can be claimed by anyone holding your project's tokens alongside you."}
				props={{ 0: '0' }}
			/>
		</p>
		<p />
		<h1><Trans>Transparency & accountability</Trans></h1>
		<p>
			<Trans>
				Changes to your project's funding configuration require a community-approved period to take
				effect, which acts as a safeguard against rug pulls. Your supporters don't have to trust you
				— even though they already do.
			</Trans>
		</p>
		<p />

		<p>
			<Trans
				message={'Note: Juicebox is new, unaudited, and not guaranteed to work perfectly. Before spending money, do your own research: <0>ask questions</0>, <1>check out the code</1>, and understand the risks!'}
			/>
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
		flex-wrap: wrap;
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
		.left,
		.right {
			flex: 0 0 100%;
			max-width: 100%;
		}
	}
</style>

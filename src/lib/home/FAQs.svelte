<script>
	import CollapsibleSection from '$lib/create/CollapsibleSection.svelte';
</script>

<section>
	<h1>FAQs</h1>
	<div class="border-wrapper">
		<CollapsibleSection expanded={false}>
			<h4 slot="header">Who funds Juicebox projects?</h4>
			<p>
				Users fund your project by paying to use your app or service, or as a patron or investor by
				making a payment directly to your project's smart contract (like on this app). For users
				paying through your app, you should route those funds through the Juicebox smart contracts
				so they receive tokens in return.
			</p>
		</CollapsibleSection>
	</div>
	<div class="border-wrapper">
		<CollapsibleSection expanded={false}>
			<h4 slot="header">What does Juicebox cost?</h4>
			<p>
				Juicebox is an open protocol on Ethereum that is funded using Juicebox itself. You can check
				out the contractualized budget specs <a
					href="https://juicebox.money/#/p/juicebox"
					target="_blank"
					rel="noopener noreferrer">here</a
				>.
			</p>
			<p>
				Projects building on Juicebox pay a 2.5% JBX membership fee from withdrawn funds into the
				JuiceboxDAO treasury. Projects can then use their JBX to participate in the governance of
				JuiceboxDAO and its collective treasury, as well as redeem from its growing <a
					href="https://youtu.be/9Mq5oDh0aBY"
					target="_blank"
					rel="noopener noreferrer">overflow</a
				>. The fee is also subject to change via JBX member votes.
			</p>
		</CollapsibleSection>
	</div>
	<div class="border-wrapper">
		<CollapsibleSection expanded={false}>
			<h4 slot="header">What is overflow?</h4>
			<p>
				If you know how much your project needs to earn over some period of time to be sustainable,
				you can set a funding target with that amount. If your project earns more than that, the
				surplus funds are locked in an overflow pool. Anyone holding your project's tokens can claim
				a portion of the overflow pool in exchange for redeeming their tokens.
			</p>
			<p>
				For more info, check out this <a
					href="https://youtu.be/9Mq5oDh0aBY"
					target="_blank"
					rel="noopener noreferrer">short video</a
				>.
			</p>
		</CollapsibleSection>
	</div>
</section>

<style>
	section {
		max-width: 800px;
		margin: auto;
		padding: 80px 20px;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 600;
		line-height: 1.2;
		margin: 0px;
		margin-bottom: 20px;
		color: var(--text-header);
	}

	h4 {
		color: var(--text-header);
		margin: 0;
		margin-left: 10px;
	}

	div p:first-of-type {
		padding: 20px 10px 10px;
	}
    
	p {
		font-weight: 300;
		padding: 10px;
	}

	.border-wrapper {
		border-top: 1px solid var(--stroke-secondary);
		border-right: 1px solid var(--stroke-secondary);
		border-left: 1px solid var(--stroke-secondary);
		padding: 15px;
	}

	.border-wrapper:last-of-type {
		border-bottom: 1px solid var(--stroke-secondary);
	}
</style>

<script lang="ts">
	/**
	 * This is the modal that shows right after a project is created.
	 */
	import { tweet } from '$utils/v2/tweet';
	import DescriptiveNumberedButton from '$lib/create/DescriptiveNumberedButton.svelte';
	import Trans from '$lib/components/Trans.svelte';
	import Button from '$lib/components/Button.svelte';

	const projectURL = window.location.origin + '/#'; // + useLocation().pathname
	const twitterMsg = `Check out my new @juiceboxETH project! ${projectURL}`;

	enum NextOptions {
		erc20,
		payable,
		twitter
	}

	function implementMe() {
		console.log('🛠 implement me');
	}

	const buttons = [
		{
			id: NextOptions.erc20,
			title: 'Issue an ERC-20 token',
			description:
				'Create your own ERC-20 token to represent stake in your project. Contributors will receive these tokens when they pay your project.',
			onClick: implementMe
		},
		{
			id: NextOptions.payable,
			title: 'Create a payable address',
			description: 'Create an Ethereum address that can be used to pay your project directly.',
			onClick: implementMe
		},
		{
			id: NextOptions.twitter,
			title: 'Share to Twitter',
			description: "Let's get this party started!",
			onClick: () => {
				tweet(twitterMsg);
				done[NextOptions.twitter] = true;
			}
		}
	];

	const done = {
		[NextOptions.erc20]: false,
		[NextOptions.payable]: false,
		[NextOptions.twitter]: false
	};
</script>

<h2>Next steps</h2>
<section>
	<p>
		<Trans>
			Congratulations on launching your project! We recommend you take these next steps to help your
			project gain traction. These steps are optional and you can complete them later on.
		</Trans>
	</p>
	{#each buttons as button, number}
		<DescriptiveNumberedButton {...button} number={number + 1} visited={done[button.id]} />
	{/each}

	<div class="right">
		<Button size="md" type="secondary"><Trans>Later</Trans></Button>
	</div>
</section>

<style>
	h2 {
		color: var(--text-header);
	}

	p {
		font-weight: 300;
	}

	section {
		max-width: 450px;
	}

	.right {
		float: right;
	}
</style>

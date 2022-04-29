<script lang="ts" context="module">
	import { browser } from '$app/env';
	export const hydrate = true;
	export const router = browser;
	export const prerender = true;
	import Head from '$lib/project/Head.svelte';
	import Stats from '$lib/project/Stats.svelte';
	import Details from '$lib/project/Details.svelte';
	import Activity from '$lib/project/Activity.svelte';
	// import '$lib/scss/index.scss';
	// import '$lib/scss/button.scss';
</script>

<section
	class="ant-layout"
	style="display: flex; flex-direction: column; height: 100%; background: transparent;"
>
	<main class="ant-layout-content">
		<div style="max-width: 1080px; margin: 0px auto; padding: 20px;">
			<div>
				<Head />
				<Stats />
				<div
					class="ant-row"
					style="margin-left: -20px; margin-right: -20px; padding-bottom: 40px; row-gap: 0px;"
				>
					<Details />
					<Activity />
				</div>
			</div>
			<div style="text-align: center; padding: 20px;">
				<button type="button" class="ant-btn ant-btn-link">Back to top</button>
			</div>
			<a
				class="feedback-button hide-mobile "
				href="https://auditor.typeform.com/to/REMUTIbQ?project=juicebox&amp;address=0x283e4500fd7c9e1bf83b828f13a597b47311700c&amp;resolution=1139x984&amp;referrer=stoned-banny#"
				target="_blank"
				rel="noopener noreferrer"><img src="/stoned_banny.png" alt="Stoned banny" /></a
			>
		</div>
	</main>
</section>

<style>
</style>

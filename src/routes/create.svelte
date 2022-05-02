<script>
	import CreateProject from '$lib/create/CreateProject.svelte';

	// TODO tried testing with lingui macro, but I can't get
	// it to work at all, below are attempts at testing
	// Please Help.

	// import { i18n } from '@lingui/core';
	import { loadLocale } from '$lib/provider/LanguageProvider';
	import { onMount } from 'svelte';
	// import defaultLocale from '../locales/en/messages';

	// i18n.activate('en');
	// const { messages } = defaultLocale;
	// i18n.load('en', messages);

	onMount(async () => {
		loadLocale();
	});
</script>

<CreateProject />

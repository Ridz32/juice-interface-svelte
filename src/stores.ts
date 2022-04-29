import { writable, derived } from 'svelte/store';

export const projectDetails = writable({
	name: null,
	description: null,
	website: null,
	twitter: null,
	discord: null,
	payButtonText: 'Pay',
	payDisclosure: null,
	logo: null,
});

export const twitterHandle = derived(
	projectDetails['twitter'],
    // TODO: Check if it starts with @, if not prefix it
	$twitter => `@${$twitter}!`
);
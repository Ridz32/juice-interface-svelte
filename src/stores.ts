import { writable, derived } from 'svelte/store';

export const name = writable();
export const description = writable();
export const website = writable();
export const twitter = writable();
export const discord = writable();
export const payButtonText = writable();
export const payDisclosure = writable();
export const logo = writable();

export const twitterHandle = derived(
	twitter,
    // TODO: Check if it starts with @, if not prefix it
	$twitter => `@${$twitter}!`
);
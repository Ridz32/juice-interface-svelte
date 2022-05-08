import { browser } from '$app/env';
import Store from '$utils/Store';

const data = new Store();

export const darkMode = new Store(browser ? localStorage.getItem('DARK_MODE') === 'true' : false);

if (browser) {
	darkMode.subscribe((value) => localStorage.setItem('DARK_MODE', JSON.stringify(value)));
}

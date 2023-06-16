import { writable } from 'svelte/store';
import GUN from 'gun';
import 'gun/sea';
import { browser } from '$app/environment';

export const gun = browser
	? new GUN({ peers: [`http://${window.location.host}/gun`] })
	: global.gun;

export const messages = writable<Array<string>>([]);

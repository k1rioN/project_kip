import { writable } from 'svelte/store';
let message;
function Message1() {
	const { update } = writable(0);

	return {
		increment: () => update({message}),
	};
}

export const message2 = Message1();
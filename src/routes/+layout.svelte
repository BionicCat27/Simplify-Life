<script lang="ts">
	import { onMount } from 'svelte';
	import { initFirebase } from '$lib/client/firebase';
	import { authUser } from '../stores/auth';
	import { onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';

	onMount(() => {
		const { auth } = initFirebase();
		onAuthStateChanged(auth, authUser.set);
	});

	authUser.subscribe((user) => {
		if (user) {
			goto('/dashboard');
		}
	});
</script>

<slot />

<style>
	:global(body) {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: lighter;
		margin: 0;
		min-height: 100%;
	}

	:global(h1, h2, button) {
		margin: 0;
	}

	:global(form) {
		display: inherit;
		flex-direction: inherit;
	}

	:global(button) {
		text-align: center;
	}

	:global(button, input) {
		text-transform: lowercase;
		background-color: rgba(209, 209, 209, 0.05);
		border: 1px solid #d1d1d1;
		color: #d1d1d1;
		padding: 0.5em 1em;
		text-decoration: none;
		font-size: 1em;
		font-weight: 900;
	}

	:global(button:hover) {
		background-color: #d1d1d1;
		color: rgb(36, 36, 36);
	}
</style>

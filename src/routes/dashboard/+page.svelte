<script lang="ts">
	import { goto } from '$app/navigation';
	import { initFirebase } from '$lib/client/firebase';
	import { signOut } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { authUser } from '../../stores/auth';

	let displayToken = '';

	onMount(() => {
		authUser.subscribe((user) => {
			if (!user) {
				goto('/');
			} else {
				displayToken = String(user?.email);
			}
		});
	});
	function signout() {
		const { auth } = initFirebase();
		signOut(auth);
		goto('/');
	}
</script>

<div id="root">
	<div id="dash">
		<h1>Dashboard</h1>
		<h2>Welcome {displayToken}</h2>
		<button on:click={signout}>Sign out</button>
	</div>
</div>

<style>
	div#root {
		background-color: rgba(6, 6, 6, 1);
		min-height: 100vh;
		color: #d1d1d1;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
	}

	div#dash {
		border-radius: 8px;
		box-shadow:
			5px 5px 10px #020202,
			-5px -5px 10px #0a0a0a;
		padding: 4em;
		background-color: rgb(20, 20, 20);
		min-height: 100%;
		height: max-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

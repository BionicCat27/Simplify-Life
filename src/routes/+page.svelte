<script>
	const PageStates = {
		landing: 0,
		login: 1,
		signup: 2
	};
	const PageStateIndexes = Object.fromEntries(
		Object.entries(PageStates).map(([key, value]) => {
			return [value, key];
		})
	);
	let pageState = PageStates.landing;
</script>

<div class="root">
	<div class="root-container">
		{#if pageState === PageStates.landing}
			<div class="header-container">
				<h1>Simplify Life</h1>
				<h2>Maximise Living</h2>
			</div>
			<div class="button-container">
				<button class="login-button" on:click={() => (pageState = PageStates.login)}>Login</button>
				<button class="signup-button" on:click={() => (pageState = PageStates.signup)}
					>Signup</button
				>
			</div>
		{:else if [PageStates.login, PageStates.signup].includes(pageState)}
			<h1>{PageStateIndexes[pageState]}</h1>
			<input placeholder="email" />
			<input placeholder="password" />
			<div class="button-container">
				<button on:click={() => (pageState = PageStates.landing)} class="login-button"
					>{PageStateIndexes[pageState]}</button
				>
				<button on:click={() => (pageState = PageStates.landing)} class="signup-button">back</button
				>
			</div>
		{/if}
	</div>
</div>

<style>
	.root {
		background: rgb(36, 36, 36);
		background: linear-gradient(135deg, rgba(36, 36, 36, 1) 0%, rgba(6, 6, 6, 1) 100%);
		text-transform: lowercase;
		height: 100vh;
		color: #d1d1d1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.root-container {
		display: flex;
		flex-direction: column;
		text-align: center;
		width: fit-content;
	}

	.header-container {
		text-align-last: justify;
	}

	.login-button {
		margin-right: 0.5em;
	}
	.signup-button {
		margin-left: 0.5em;
	}

	.button-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.button-container button {
		margin-top: 0.4em;
		text-align-last: center;
	}
</style>

<script>
</script>

<div class="root">
	<div class="header-container">
		<h1>Simplify Life</h1>
		<h2>Maximise Living</h2>
		<div class="button-container">
			<button class="login-button">Login</button>
			<button class="signup-button">Signup</button>
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: lighter;
		margin: 0;
		min-height: 100%;
	}

	.root {
		background: rgb(36, 36, 36);
		background: linear-gradient(135deg, rgba(36, 36, 36, 1) 0%, rgba(6, 6, 6, 1) 100%);
		text-transform: uppercase;
		height: 100vh;
		color: #d1d1d1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.header-container {
		width: fit-content;
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
	}

	h1,
	h2,
	button {
		margin: 0;
	}

	button {
		text-transform: uppercase;
		background-color: transparent;
		border: 1px solid #d1d1d1;
		color: #d1d1d1;
		padding: 0.5em 1em;
		text-decoration: none;
		display: inline-block;
		font-size: 1em;
		width: 100%;
		text-align: center;
		font-weight: 900;
	}

	button:hover {
		background-color: #d1d1d1;
		color: rgb(36, 36, 36);
	}
</style>

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

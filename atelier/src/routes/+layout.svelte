<script>
	import '$lib/style.css';
</script>

<svelte:head>
	<title>Pour l'amour de XML!</title>
</svelte:head>
<div class="content">
	<header>
		<h1>Pour l'amour de XML!</h1>
		<nav>
			<ul>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/a-propos">À Propos</a>
				</li>
			</ul>
		</nav>
	</header>

	<slot />
</div>

<footer>Credits</footer>

<style>
	header {
		margin-bottom: 3rem;
	}
	nav ul {
		display: flex;
		flex-direction: row;
		gap: 1.5rem;
		list-style: none;
		font-size: 1rem;
		text-transform: uppercase;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>

<script>
	import Card from './Card.svelte';

	export let data;

	$: data.posts.filter((p) => p.lang === data.lang);
</script>

<h2>Listes des entrées</h2>

<ul>
	{#each data.posts as p}
		<li>
			<a href={`blog/${p.slug}`}>
				<Card
					title={p.title}
					author={p.author}
					published_date={p.published_date}
					description={p.description}
					tags={p.tags}
				>
					<p>Ceci est dans le slot</p>
				</Card>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
</style>

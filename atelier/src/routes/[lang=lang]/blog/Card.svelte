<script>
	export let title;
	export let author;
	export let published_date;
	export let tags;
	export let description;
</script>

<div class="card">
	<h2>{title}</h2>
	<p>Author: {author}</p>
	<p>Published Date: {published_date}</p>
	<p>{description}</p>

	<slot />

	<div class="tags">
		{#each tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</div>

<style>
	/* Add your styling here */
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 16px;
		margin: 16px;
	}

	.tags {
		margin-top: 8px;
	}

	.tag {
		display: inline-block;
		background-color: #eee;
		padding: 4px 8px;
		margin-right: 4px;
		border-radius: 4px;
	}
</style>

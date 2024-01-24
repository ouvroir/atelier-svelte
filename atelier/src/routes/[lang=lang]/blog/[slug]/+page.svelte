<script>
	export let data;

	$: post = data.post;
</script>

{#if post}
	{@html post.html}
{/if}

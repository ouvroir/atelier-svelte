export const load = async ({ params }) => {
	const lang = params.lang;

	const files = Object.entries(import.meta.glob(`../../../lib/data/md/*-${lang}.md`));

	const currentSlug = params.slug;

	const result = await Promise.all(
		files.map(async ([path, resolver]) => {
			const md = await resolver();
			let html = md.default.render().html;

			html = html.replace('<h1', '<h2');

			let slug = path.split('/');
			slug = slug[slug.length - 1].replace('.md', '');

			return {
				slug,
				html
			};
		})
	);

	return {
		post: result.filter((p) => p.slug === currentSlug)[0]
	};
};

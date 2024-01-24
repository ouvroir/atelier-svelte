export const load = async () => {
	const files = Object.entries(import.meta.glob('../../lib/data/md/*.md'));

	const result = await Promise.all(
		files.map(async ([path, resolver]) => {
			const md = await resolver();

			let slug = path.split('/');
			slug = slug[slug.length - 1].replace('.md', '');

			return {
				...md.metadata,
				slug
			};
		})
	);

	return {
		posts: result
	};
};

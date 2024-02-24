import { imageBuilder, sanityClient } from '@/lib/sanity';
import { IBlogPost } from '@/types';
import { getLocale } from '@/utils';

export async function fetchPosts() {
	const postQuery = `
		*[_type == "post" && language == $locale]{
			title,
			image,
			"slug": slug.current,
			excerpt,
			tags,
			"readingTime": round(length(pt::text(content)) / 5 / 180 )
		}
	`;

	const locale = getLocale();

	const posts = await sanityClient.fetch<IBlogPost[]>(postQuery, {
		locale,
	});

	const result = posts.map(post => ({
		...post,
		image: imageBuilder.image(post.image).url(),
	}));

	return result;
}

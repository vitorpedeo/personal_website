import { imageBuilder, sanityClient } from '@/lib/sanity';
import { IBlogPost } from '@/types';
import { getLocale } from '@/utils';

export async function fetchPosts() {
	const postQuery = `
		*[_type == "post"]{
			"title": title[_key == $locale][0].value,
			image,
			"slug": slug.current,
			"excerpt": excerpt[_key == $locale][0].value,
			tags,
			"readingTime": round(length(pt::text(content[_key == $locale][0].value)) / 5 / 180 )
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

export async function fetchPostBySlug(slug: string) {
	const postQuery = `
		*[_type == "post" && slug.current == $slug]{
			"title": title[_key == $locale][0].value,
			image,
			"content": content[_key == $locale][0].value,
			tags,
			"readingTime": round(length(pt::text(content[_key == $locale][0].value)) / 5 / 180 ),
			"publishedAt": _createdAt
		}
	`;

	const locale = getLocale();

	const post = await sanityClient.fetch<IBlogPost[]>(postQuery, {
		locale,
		slug,
	});

	const result = {
		...post[0],
		image: imageBuilder.image(post[0].image).url(),
	};

	return result;
}

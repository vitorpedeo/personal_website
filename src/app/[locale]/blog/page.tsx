import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { fetchPosts } from '@/actions';
import { BlogPost } from '@/components/blog/blog-post';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('blog');

	return {
		title: `vitorpedeo.dev | ${t('title')}`,
		description: t('description'),
	};
}

export default async function AboutMe() {
	const t = await getTranslations('blog');

	const posts = await fetchPosts();

	return (
		<div className="flex flex-col gap-12 items-start">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-body leading-7">{t('description')}</p>
			</div>

			<div className="w-full grid gap-8">
				{posts.map((blogPost, index) => (
					<BlogPost key={index} blogPost={blogPost} />
				))}
			</div>
		</div>
	);
}

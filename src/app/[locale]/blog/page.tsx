import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { BlogPostCard } from '@/components/blog/post-card';
import { type BlogLocale, getAllBlogPosts } from '@/lib/blog';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Blog' });

	return {
		description: t('subtitle'),
		title: `${t('title')} | vitorpedeo.dev`,
	};
}

export default async function BlogIndexPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const blogLocale = locale as BlogLocale;
	const [posts, t] = await Promise.all([
		getAllBlogPosts(blogLocale),
		getTranslations({ locale, namespace: 'Blog' }),
	]);

	return (
		<section className="max-w-3xl mx-auto px-4 pt-32 space-y-8">
			<div className="space-y-4 text-center md:text-left">
				<h1 className="text-4xl font-bold tracking-tight text-foreground">
					{t('title')}
				</h1>
				<p className="max-w-2xl text-muted-foreground">{t('subtitle')}</p>
			</div>

			{posts.length === 0 ? (
				<div className="mt-10 rounded-2xl border border-dashed border-border px-6 py-12 text-center">
					<p className="mx-auto max-w-md text-lg text-muted-foreground">
						{t('empty')}
					</p>
				</div>
			) : (
				<div className="mt-10 grid gap-6 md:grid-cols-2">
					{posts.map(post => (
						<BlogPostCard
							key={`${post.locale}-${post.slug}`}
							post={post}
							locale={blogLocale}
							readLabel={t('readPost')}
						/>
					))}
				</div>
			)}
		</section>
	);
}

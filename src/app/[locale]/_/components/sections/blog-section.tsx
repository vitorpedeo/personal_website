import { getTranslations } from 'next-intl/server';

import { BlogPostCard } from '@/components/blog/post-card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { type BlogLocale, getRecentBlogPosts } from '@/lib/blog';

export async function BlogSection({ locale }: { locale: BlogLocale }) {
	const [posts, t] = await Promise.all([
		getRecentBlogPosts(locale, 3),
		getTranslations({ locale, namespace: 'Blog' }),
	]);

	return (
		<section id="blog" className="pt-20 pb-16">
			<div className="max-w-3xl px-4 mx-auto space-y-6">
				<div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold text-foreground">{t('title')}</h2>
						<p className="text-muted-foreground">{t('subtitle')}</p>
					</div>
				</div>

				{posts.length === 0 ? (
					<div className="rounded-2xl border border-dashed border-border px-6 py-12 text-center">
						<p className="mx-auto max-w-md text-lg text-muted-foreground">
							{t('empty')}
						</p>
					</div>
				) : (
					<>
						<div className="grid gap-6 md:grid-cols-2">
							{posts.map(post => (
								<BlogPostCard
									key={`${post.locale}-${post.slug}`}
									post={post}
									locale={locale}
									readLabel={t('readPost')}
								/>
							))}
						</div>

						<Button variant="outline" asChild>
							<Link href="/blog">{t('viewAll')}</Link>
						</Button>
					</>
				)}
			</div>
		</section>
	);
}

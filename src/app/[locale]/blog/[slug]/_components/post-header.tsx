import { ArrowLeftIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import {
	type BlogLocale,
	type BlogPostMetadata,
	formatBlogDate,
} from '@/lib/blog';

export async function PostHeader({
	locale,
	metadata,
}: {
	locale: BlogLocale;
	metadata: BlogPostMetadata;
}) {
	const t = await getTranslations({ locale, namespace: 'Blog.post' });

	return (
		<header className="space-y-6">
			<Link
				href="/blog"
				className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
			>
				<ArrowLeftIcon className="size-4" />
				{t('backToBlog')}
			</Link>

			<div className="space-y-4">
				<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
					<span className="font-medium text-foreground">
						{t('publishedOn')}
					</span>
					<time dateTime={metadata.publishedAt}>
						{formatBlogDate(metadata.publishedAt, locale)}
					</time>
				</div>

				<h1 className="text-4xl font-bold tracking-tight text-foreground">
					{metadata.title}
				</h1>

				<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
					{metadata.summary}
				</p>
			</div>

			{metadata.tags.length > 0 && (
				<ul className="flex flex-wrap gap-2">
					{metadata.tags.map(tag => (
						<li key={tag}>
							<span className="inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
								{tag}
							</span>
						</li>
					))}
				</ul>
			)}
		</header>
	);
}

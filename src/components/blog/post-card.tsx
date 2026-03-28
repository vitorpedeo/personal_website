import { ArrowRightIcon } from 'lucide-react';

import { Link } from '@/i18n/navigation';
import {
	type BlogLocale,
	type BlogPostPreview,
	formatBlogDate,
} from '@/lib/blog';
import { cn } from '@/lib/utils';

export function BlogPostCard({
	className,
	locale,
	post,
	readLabel,
}: {
	className?: string;
	locale: BlogLocale;
	post: BlogPostPreview;
	readLabel: string;
}) {
	return (
		<article
			className={cn(
				'rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-lg',
				className
			)}
		>
			<div className="flex h-full flex-col gap-4">
				<div className="space-y-3">
					<time
						dateTime={post.metadata.publishedAt}
						className="text-sm text-muted-foreground"
					>
						{formatBlogDate(post.metadata.publishedAt, locale)}
					</time>

					<h3 className="text-xl font-semibold text-foreground">
						<Link
							href={post.href}
							className="transition-colors hover:text-primary"
						>
							{post.metadata.title}
						</Link>
					</h3>

					<p className="text-sm leading-relaxed text-muted-foreground">
						{post.metadata.summary}
					</p>
				</div>

				{post.metadata.tags.length > 0 && (
					<ul className="flex flex-wrap gap-2">
						{post.metadata.tags.map(tag => (
							<li key={tag}>
								<span className="inline-flex items-center rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
									{tag}
								</span>
							</li>
						))}
					</ul>
				)}

				<Link
					href={post.href}
					className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
				>
					{readLabel}
					<ArrowRightIcon className="size-4" />
				</Link>
			</div>
		</article>
	);
}

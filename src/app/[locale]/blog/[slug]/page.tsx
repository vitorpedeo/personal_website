import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Prose } from '@/components/utils/prose';
import {
	type BlogLocale,
	getBlogPost,
	getBlogPostStaticParams,
} from '@/lib/blog';

import { PostHeader } from './_components/post-header';

export const dynamicParams = false;

export async function generateStaticParams() {
	return getBlogPostStaticParams();
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
	const { locale, slug } = await params;
	const post = await getBlogPost({ locale: locale as BlogLocale, slug });

	if (!post) {
		return {};
	}

	return {
		description: post.metadata.summary,
		keywords: post.metadata.tags,
		title: `${post.metadata.title} | vitorpedeo.dev`,
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) {
	const { locale, slug } = await params;
	const post = await getBlogPost({ locale: locale as BlogLocale, slug });

	if (!post) {
		notFound();
	}

	const Content = post.Content;

	return (
		<article className="mx-auto max-w-3xl px-4 pb-20 pt-28">
			<PostHeader locale={post.locale} metadata={post.metadata} />
			<Prose className="blog-prose mt-10">
				<Content />
			</Prose>
		</article>
	);
}

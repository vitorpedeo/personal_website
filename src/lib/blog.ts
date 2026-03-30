import type { ComponentType } from 'react';
import { cache } from 'react';

import { routing } from '@/i18n/routing';

import fs from 'node:fs/promises';
import path from 'node:path';

export type BlogLocale = (typeof routing.locales)[number];

export type BlogPostMetadata = {
	publishedAt: string;
	summary: string;
	tags: string[];
	title: string;
};

export type BlogPostPreview = {
	href: string;
	locale: BlogLocale;
	metadata: BlogPostMetadata;
	slug: string;
};

export type BlogPost = BlogPostPreview & {
	Content: ComponentType;
};

type BlogPostModule = {
	default: ComponentType;
	metadata: BlogPostMetadata;
};

const BLOG_CONTENT_DIRECTORY = path.join(process.cwd(), 'content', 'blog');

export function defineBlogPostMetadata(metadata: BlogPostMetadata) {
	return metadata;
}

async function fileExists(filePath: string) {
	try {
		await fs.access(filePath);
		return true;
	} catch {
		return false;
	}
}

function getPostHref(slug: string) {
	return `/blog/${slug}`;
}

function getPublishedTimestamp(metadata: BlogPostMetadata, slug: string) {
	const timestamp = Date.parse(metadata.publishedAt);

	if (Number.isNaN(timestamp)) {
		throw new Error(
			`Invalid "publishedAt" value for blog post "${slug}": ${metadata.publishedAt}`
		);
	}

	return timestamp;
}

function normalizeMetadata(metadata: BlogPostMetadata, slug: string) {
	if (
		!metadata ||
		typeof metadata.title !== 'string' ||
		typeof metadata.summary !== 'string' ||
		typeof metadata.publishedAt !== 'string' ||
		!Array.isArray(metadata.tags) ||
		metadata.tags.some(tag => typeof tag !== 'string')
	) {
		throw new Error(`Invalid metadata export for blog post "${slug}"`);
	}

	getPublishedTimestamp(metadata, slug);

	return metadata;
}

const getBlogPostSlugs = cache(async () => {
	try {
		const entries = await fs.readdir(BLOG_CONTENT_DIRECTORY, {
			withFileTypes: true,
		});

		return entries
			.filter(entry => entry.isDirectory())
			.map(entry => entry.name)
			.sort((left, right) => left.localeCompare(right));
	} catch (error) {
		const nodeError = error as NodeJS.ErrnoException;

		if (nodeError.code === 'ENOENT') {
			return [];
		}

		throw error;
	}
});

const getBlogPostModule = cache(async (slug: string, locale: BlogLocale) => {
	const filePath = path.join(BLOG_CONTENT_DIRECTORY, slug, `${locale}.mdx`);

	if (!(await fileExists(filePath))) {
		return null;
	}

	return (await import(
		`../../content/blog/${slug}/${locale}.mdx`
	)) as BlogPostModule;
});

export const getAllBlogPosts = cache(async (locale: BlogLocale) => {
	const slugs = await getBlogPostSlugs();
	const posts = await Promise.all(
		slugs.map(async slug => {
			const postModule = await getBlogPostModule(slug, locale);

			if (!postModule) {
				return null;
			}

			return {
				href: getPostHref(slug),
				locale,
				metadata: normalizeMetadata(postModule.metadata, slug),
				slug,
			} satisfies BlogPostPreview;
		})
	);

	return posts
		.filter((post): post is BlogPostPreview => post !== null)
		.sort(
			(left, right) =>
				getPublishedTimestamp(right.metadata, right.slug) -
				getPublishedTimestamp(left.metadata, left.slug)
		);
});

export async function getRecentBlogPosts(locale: BlogLocale, limit: number) {
	const posts = await getAllBlogPosts(locale);

	return posts.slice(0, limit);
}

export const getBlogPost = cache(
	async ({
		locale,
		slug,
	}: {
		locale: BlogLocale;
		slug: string;
	}): Promise<BlogPost | null> => {
		const postModule = await getBlogPostModule(slug, locale);

		if (!postModule) {
			return null;
		}

		return {
			Content: postModule.default,
			href: getPostHref(slug),
			locale,
			metadata: normalizeMetadata(postModule.metadata, slug),
			slug,
		};
	}
);

export async function getBlogPostStaticParams() {
	const slugs = await getBlogPostSlugs();
	const params = await Promise.all(
		slugs.flatMap(slug =>
			routing.locales.map(async locale => {
				const filePath = path.join(
					BLOG_CONTENT_DIRECTORY,
					slug,
					`${locale}.mdx`
				);

				if (!(await fileExists(filePath))) {
					return null;
				}

				return { locale, slug };
			})
		)
	);

	return params.filter(
		(param): param is { locale: BlogLocale; slug: string } => param !== null
	);
}

export function formatBlogDate(date: string, locale: BlogLocale) {
	return new Intl.DateTimeFormat(locale, {
		dateStyle: 'long',
		timeZone: 'UTC',
	}).format(new Date(date));
}

import readingTime from 'reading-time';

import type {
  ContentfulSlug,
  ContentfulPost,
  GetAllSlugsParams,
  GetAllPostsParams,
  GetLatestPostParams,
  GetPostBySlugParams,
} from '@/modules/common/types';
import { contentfulClient } from '@/modules/common/services/contentful';

export async function getAllSlugs(
  { locale = 'en-US' }: GetAllSlugsParams = { locale: 'en-US' },
) {
  const slugs = await contentfulClient.getEntries<ContentfulSlug>({
    content_type: 'post',
    locale,
    select: 'fields.slug',
  });

  const formattedSlugs = slugs.items.map(rawSlug => rawSlug.fields.slug);

  return formattedSlugs;
}

export async function getAllPosts(
  { locale = 'en-US' }: GetAllPostsParams = { locale: 'en-US' },
) {
  const posts = await contentfulClient.getEntries<ContentfulPost>({
    content_type: 'post',
    locale,
    order: '-fields.createdAt',
  });

  const formattedPosts = posts.items.map(post => ({
    id: post.sys.id,
    banner: `https:${post.fields.banner.fields.file.url}`,
    title: post.fields.title,
    slug: post.fields.slug,
    excerpt: post.fields.excerpt,
    createdAt: post.fields.createdAt,
    tags: post.fields.tags,
    readingTime: Math.ceil(readingTime(post.fields.content).minutes),
    content: post.fields.content,
  }));

  return formattedPosts;
}

export async function getLatestPost(
  { locale = 'en-US' }: GetLatestPostParams = { locale: 'en-US' },
) {
  const allPosts = await getAllPosts({ locale });
  const latesPost = allPosts[0];

  return latesPost;
}

export async function getPostBySlug(
  { slug, locale = 'en-US' }: GetPostBySlugParams = {
    slug: '',
    locale: 'en-US',
  },
) {
  const post = await contentfulClient.getEntries<ContentfulPost>({
    content_type: 'post',
    locale,
    'fields.slug': slug,
  });

  const postFields = post.items[0].fields;

  const formattedPost = {
    banner: `https:${postFields.banner.fields.file.url}`,
    title: postFields.title,
    slug: postFields.slug,
    excerpt: postFields.excerpt,
    createdAt: postFields.createdAt,
    tags: postFields.tags,
    readingTime: Math.ceil(readingTime(postFields.content).minutes),
    content: postFields.content,
  };

  return formattedPost;
}

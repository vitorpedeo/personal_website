import { compareDesc, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import readingTime from 'reading-time';

import type {
  GetLatestPostParams,
  GetAllPostsParams,
  GetAllSlugsParams,
  GetPostBySlugParams,
  Post,
} from '@/modules/common/types';

function compareISODates(firstDate: string, secondDate: string) {
  return compareDesc(parseISO(firstDate), parseISO(secondDate));
}

async function parsePost(rawPost: string) {
  // Getting front matter information
  const { content, data } = matter(rawPost);

  const frontMatter = {
    ...data,
    readingTime: Math.ceil(readingTime(content).minutes),
  };
  const mdxMarkdown = await serialize(content, { scope: frontMatter });

  const post = {
    frontMatter,
    markdown: mdxMarkdown,
  } as unknown as Post;

  return post;
}

export function getAllSlugs(
  { locale = 'en-US', removeExtension = false }: GetAllSlugsParams = {
    locale: 'en-US',
    removeExtension: false,
  },
) {
  // Finding all posts inside 'locale' directory
  const postsDir = path.resolve('public', 'posts', locale);

  // Getting all filenames (slugs)
  const slugs = fs.readdirSync(postsDir);

  if (removeExtension) {
    const slugsWithoutExtension = slugs.map(slug => slug.replace('.mdx', ''));

    return slugsWithoutExtension;
  }

  return slugs;
}

export async function getAllPosts(
  { locale = 'en-US', order = 'desc' }: GetAllPostsParams = {
    locale: 'en-US',
    order: 'desc',
  },
) {
  // Getting all slugs
  const slugs = getAllSlugs();

  // Reading all files
  const rawPosts = slugs.map(slug => {
    const fileDir = path.join('public', 'posts', locale, slug);
    const fileContent = fs.readFileSync(fileDir, 'utf8');

    return fileContent;
  });

  const parsedPosts = await Promise.all(
    rawPosts.map(async post => parsePost(post)),
  );
  const sortedPosts = parsedPosts.sort((a, b) => {
    return order === 'desc'
      ? compareISODates(a.frontMatter.publishedAt, b.frontMatter.publishedAt)
      : compareISODates(b.frontMatter.publishedAt, a.frontMatter.publishedAt);
  });

  return sortedPosts;
}

export async function getLatestPost(
  { locale = 'en-US' }: GetLatestPostParams = { locale: 'en-US' },
) {
  const posts = await getAllPosts({ locale });
  const sortedPosts = posts.sort((a, b) =>
    compareISODates(a.frontMatter.publishedAt, b.frontMatter.publishedAt),
  );

  return sortedPosts[0];
}

export async function getPostBySlug({
  slug,
  locale = 'en-US',
}: GetPostBySlugParams) {
  // Generating filename using 'slug'
  const filename = `${slug}.mdx`;

  // Getting file path
  const filePath = path.join('public', 'posts', locale, filename);

  // Reading file
  const rawPost = fs.readFileSync(filePath, 'utf8');

  const parsedPost = await parsePost(rawPost);

  return parsedPost;
}

import { compareDesc, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type Locale = 'en' | 'ptBR';

type Post = {
  frontMatter: {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    tags: string[];
  };
  markdown: string;
};

type GetAllSlugsParams = {
  locale?: Locale;
  removeExtension?: boolean;
};

type GetAllPostsParams = {
  locale?: Locale;
};

type GetLatestPostParams = {
  locale?: Locale;
};

type GetPostBySlugParams = {
  slug: string;
  locale?: Locale;
};

function compareISODates(firstDate: string, secondDate: string) {
  return compareDesc(parseISO(firstDate), parseISO(secondDate));
}

function parsePost(rawPost: string) {
  // Getting front matter information
  const parsedPost = matter(rawPost);

  const post = {
    frontMatter: parsedPost.data,
    markdown: parsedPost.content,
  } as Post;

  return post;
}

export function getAllSlugs(
  { locale = 'en', removeExtension = false }: GetAllSlugsParams = {
    locale: 'en',
    removeExtension: false,
  },
) {
  // Finding all posts inside 'locale' directory
  const postsDir = path.resolve('public', 'posts', locale);

  // Getting all filenames (slugs)
  const slugs = fs.readdirSync(postsDir);

  if (removeExtension) {
    const slugsWithoutExtension = slugs.map(slug => slug.replace('.md', ''));

    return slugsWithoutExtension;
  }

  return slugs;
}

export function getAllPosts(
  { locale = 'en' }: GetAllPostsParams = { locale: 'en' },
) {
  // Getting all slugs
  const slugs = getAllSlugs();

  // Reading all files
  const rawPosts = slugs.map(slug => {
    const fileDir = path.join('public', 'posts', locale, slug);
    const fileContent = fs.readFileSync(fileDir, 'utf8');

    return fileContent;
  });

  const parsedPosts = rawPosts.map(post => parsePost(post));

  return parsedPosts;
}

export function getLatestPost(
  { locale = 'en' }: GetLatestPostParams = { locale: 'en' },
) {
  const posts = getAllPosts({ locale });
  const sortedPosts = posts.sort((a, b) =>
    compareISODates(a.frontMatter.publishedAt, b.frontMatter.publishedAt),
  );

  return sortedPosts[0];
}

export function getPostBySlug({ slug, locale = 'en' }: GetPostBySlugParams) {
  // Generating filename using 'slug'
  const filename = `${slug}.md`;

  // Getting file path
  const filePath = path.join('public', 'posts', locale, filename);

  // Reading file
  const rawPost = fs.readFileSync(filePath, 'utf8');

  const parsedPost = parsePost(rawPost);

  return parsedPost;
}

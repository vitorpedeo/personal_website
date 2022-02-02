/* General types */

type FrontMatter = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  readingTime: number;
};

type PostContent = {
  compiledSource: string;
  scope: FrontMatter;
};

export type Post = {
  frontMatter: FrontMatter;
  markdown: PostContent;
};

/* types for @/pages/blog/index.tsx */

export interface PostProps {
  post: Post;
}

/* types for @/modules/Post/components/PostIntro/index.tsx */

export interface PostIntroProps {
  meta: FrontMatter;
}

/* types for @/modules/Post/components/PostContent/index.tsx */

export interface PostContentProps {
  content: PostContent;
}

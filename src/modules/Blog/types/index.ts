/* General types */

export type Post = {
  frontMatter: {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    tags: string[];
    readingTime: number;
  };
  markdown: string;
};

/* types for @/pages/blog/index.tsx */

export interface BlogProps {
  posts: Post[];
}

/* types for @/modules/Blog/components/BlogPostCard/index.tsx */

export interface BlogPostCardProps {
  post: Post;
}

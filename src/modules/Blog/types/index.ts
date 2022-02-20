/* General types */

type Post = {
  id: string;
  banner: string;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  readingTime: number;
  content: string;
};

/* types for @/pages/blog/index.tsx */

export interface BlogProps {
  posts: Post[];
}

/* types for @/modules/Blog/components/BlogPostCard/index.tsx */

export interface BlogPostCardProps {
  post: Post;
}

/* General types */

export type Post = {
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

export interface PostProps {
  post: Post;
}

/* types for @/modules/Post/components/PostIntro/index.tsx */

export interface PostIntroProps {
  meta: {
    slug: string;
    title: string;
    excerpt: string;
    createdAt: string;
    tags: string[];
    readingTime: number;
  };
}

/* types for @/modules/Post/components/PostContent/index.tsx */

export interface PostContentProps {
  content: string;
}

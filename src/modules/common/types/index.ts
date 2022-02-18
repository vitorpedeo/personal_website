import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

/* General types */

export type Locale = 'en-US' | 'pt-BR';

export type PathNames = '/' | '/projects' | '/blog';

export type TechNames =
  | 'HTML'
  | 'CSS'
  | 'Javascript'
  | 'React'
  | 'Rest API'
  | 'Sass'
  | 'Next.js';

/* types for @/modules/common/lib/experiences.ts */

type Experience = {
  id: number;
  company: string;
  role: string;
  work_time: string;
  description: string;
  technologies: {
    id: number;
    name: string;
  }[];
};

export type ExperiencesByLocale = Record<Locale, Experience[]>;

export type GetExperiencesParams = {
  locale?: Locale;
};

/* types for @/modules/common/lib/projects.ts */

export type ContentfulProject = {
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  title: string;
  description: string;
  techs: string[];
  liveUrl: string;
  repoUrl: string;
};

export type GetAllProjectsParams = {
  locale?: Locale;
};

/* types for @/modules/common/lib/posts.ts */

export type Post = {
  frontMatter: {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    tags: string[];
    readingTime: number;
  };
  markdown: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export type GetAllSlugsParams = {
  locale?: Locale;
  removeExtension?: boolean;
};

export type GetAllPostsParams = {
  locale?: Locale;
  order?: 'asc' | 'desc';
};

export type GetLatestPostParams = {
  locale?: Locale;
};

export type GetPostBySlugParams = {
  slug: string;
  locale?: Locale;
};

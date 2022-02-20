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

export type Languages = 'javascript' | 'json' | 'bash' | 'typescript' | 'tsx';

/* types for @/modules/common/lib/experiences.ts */

export type ContentfulExperience = {
  company: string;
  role: string;
  workTime: string;
  description: string;
  techs: string[];
};

export type GetAllExperiencesParams = {
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

export type ContentfulPost = {
  banner: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  content: string;
};

export type ContentfulSlug = {
  slug: string;
};

export type GetAllSlugsParams = {
  locale?: Locale;
};

export type GetAllPostsParams = {
  locale?: Locale;
};

export type GetLatestPostParams = {
  locale?: Locale;
};

export type GetPostBySlugParams = {
  slug: string;
  locale?: Locale;
};

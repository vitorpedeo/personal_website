import type { TechNames } from '@/modules/common/types';

/* General types */

type Experience = {
  id: number;
  company: string;
  role: string;
  work_time: string;
  description: string;
  technologies: {
    id: number;
    name: TechNames;
  }[];
};

export type Post = {
  frontMatter: {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    tags: string[];
  };
  markdown: string;
};

/* types for @/pages/index.tsx */

export interface HomeProps {
  latestPost: Post;
  experiences: Experience[];
}

/* types for @/modules/Home/components/LatestBlogPostSection.tsx */

export interface LatestBlogPostSectionProps {
  latestPost: Post;
}

/* types for @/modules/Home/components/ExperienceSection/index.tsx */

export interface ExperienceSectionProps {
  experiences: Experience[];
}

/* types for @/modules/Home/components/ExperienceSection/ExperienceCard.tsx */

export interface ExperienceCardProps {
  experience: Experience;
}

/* types for @/modules/Home/components/ExperienceSection/Tech.tsx */

export interface TechProps {
  name: TechNames;
}

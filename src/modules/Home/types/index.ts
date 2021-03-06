import type { TechNames } from '@/modules/common/types';

/* General types */

type Experience = {
  id: string;
  company: string;
  role: string;
  workTime: string;
  description: string;
  techs: TechNames[];
};

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

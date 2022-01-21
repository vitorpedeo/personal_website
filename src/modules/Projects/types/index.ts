import type { TechNames } from '@/modules/common/types';

/* General types */

type Project = {
  id: string;
  title: string;
  description: string;
  repo_url: string;
  live_url: string;
  technologies: {
    id: number;
    name: TechNames;
  }[];
};

/* types for @/pages/projects.tsx */

export interface ProjectsProps {
  projects: Project[];
}

/* types for @/modules/Projects/components/Project/index.tsx */

export interface ProjectProps {
  project: Project;
}

/* types for @/modules/Projects/components/Project/ProjectLink.tsx */

export interface ProjectLinkProps {
  urlType: 'live' | 'repo';
  url: string;
}

/* types for @/modules/Projects/components/Project/Tech.tsx */

export interface TechProps {
  name: TechNames;
}

import type { TechNames } from '@/modules/common/types';

/* General types */

type Project = {
  id: string;
  image: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
  techs: TechNames[];
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

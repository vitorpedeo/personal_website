/* General types */

export type TechNames =
  | 'HTML'
  | 'CSS'
  | 'Javascript'
  | 'React'
  | 'API Rest'
  | 'Sass'
  | 'Next.js';

/* General types end */

/* useProjects types */

type ProjectImage = {
  data: {
    attributes: {
      alternativeText: string;
      formats: {
        large: {
          url: string;
        };
      };
    };
  };
};

type ProjectTechnology = {
  data: [
    {
      attributes: {
        name: string;
        color: string;
      };
    },
  ];
};

type Project = {
  id: number;
  attributes: {
    title: string;
    description: string;
    repo_url: string;
    live_url: string;
    image: ProjectImage;
    technologies: ProjectTechnology;
  };
};

export type ProjectAPIPayload = {
  data: Project[];
};

/* useProjects types end */

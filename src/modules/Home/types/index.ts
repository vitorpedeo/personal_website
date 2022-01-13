/* useExperiences types */

type Technology = {
  data: [
    {
      attributes: {
        name: string;
        color: string;
      };
    },
  ];
};

type Experience = {
  id: number;
  attributes: {
    company: string;
    role: string;
    work_time: string;
    description: string;
    technologies: Technology;
  };
};

export type ExperienceAPIPayload = {
  data: Experience[];
};

/* useExperiences types end */

/* useLatestPost types */

type PostBanner = {
  data: {
    attributes: {
      alternativeText: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
};

type PostTags = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
      };
    },
  ];
};

type Post = {
  id: number;
  attributes: {
    slug: string;
    title: string;
    description: string;
    read_time: string;
    banner: PostBanner;
    tags: PostTags;
  };
};

export type LatestPostAPIPayload = {
  data: Post;
};

/* useLatestPost types end */

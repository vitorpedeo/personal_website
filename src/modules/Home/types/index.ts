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

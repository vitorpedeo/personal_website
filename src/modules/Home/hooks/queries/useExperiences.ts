import { useQuery } from 'react-query';

import { setupApiClient } from '@/modules/common/services/api';
import { ExperienceAPIPayload } from '@/modules/Home/types';

export async function getExperiencesRequest() {
  const api = setupApiClient();

  const { data } = await api.get<ExperienceAPIPayload>(
    '/experiences?populate=*',
  );

  const formattedExperiences = data.data.map(experience => ({
    id: experience.id,
    company: experience.attributes.company,
    role: experience.attributes.role,
    work_time: experience.attributes.work_time,
    description: experience.attributes.description,
    technologies: experience.attributes.technologies.data.map(tech => ({
      name: tech.attributes.name,
      color: tech.attributes.color,
    })),
  }));

  return formattedExperiences;
}

function useExperiences() {
  const query = useQuery('experiences', getExperiencesRequest, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return query;
}

export default useExperiences;

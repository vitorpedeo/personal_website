import { useQuery } from 'react-query';

import { setupApiClient } from '@/modules/common/services/api';
import { getStrapiMedia } from '@/modules/common/services/strapi';
import { ProjectAPIPayload } from '@/modules/Projects/types';

export async function getProjectsRequest() {
  const api = setupApiClient();

  const { data } = await api.get<ProjectAPIPayload>('/projects?populate=*');

  const formattedProjects = data.data.map(project => ({
    id: project.id,
    title: project.attributes.title,
    description: project.attributes.description,
    repo_url: project.attributes.repo_url,
    live_url: project.attributes.live_url,
    image_url: getStrapiMedia(
      project.attributes.image.data.attributes.formats.large.url,
    ),
    image_alt: project.attributes.image.data.attributes.alternativeText,
    technologies: project.attributes.technologies.data.map(tech => ({
      name: tech.attributes.name,
      color: tech.attributes.color,
    })),
  }));

  return formattedProjects;
}

function useProjects() {
  const query = useQuery('projects', getProjectsRequest, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return query;
}

export default useProjects;

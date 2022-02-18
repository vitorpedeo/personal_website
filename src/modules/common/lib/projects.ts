import { contentfulClient } from '@/modules/common/services/contentful';
import {
  ContentfulProject,
  GetAllProjectsParams,
} from '@/modules/common/types';

export async function getAllProjects(
  { locale = 'en-US' }: GetAllProjectsParams = { locale: 'en-US' },
) {
  const projects = await contentfulClient.getEntries<ContentfulProject>({
    content_type: 'project',
    locale,
  });

  const formattedProjects = projects.items.map(project => ({
    id: project.sys.id,
    image: `https:${project.fields.image.fields.file.url}`,
    title: project.fields.title,
    description: project.fields.description,
    techs: project.fields.techs,
    liveUrl: project.fields.liveUrl,
    repoUrl: project.fields.repoUrl,
  }));

  return formattedProjects;
}

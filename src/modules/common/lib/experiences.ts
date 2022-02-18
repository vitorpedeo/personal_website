import { contentfulClient } from '@/modules/common/services/contentful';
import type {
  ContentfulExperience,
  GetAllExperiencesParams,
} from '@/modules/common/types';

export async function getAllExperiences(
  { locale = 'en-US' }: GetAllExperiencesParams = { locale: 'en-US' },
) {
  const experiences = await contentfulClient.getEntries<ContentfulExperience>({
    content_type: 'experience',
    locale,
  });

  const formattedExperiences = experiences.items.map(experience => ({
    id: experience.sys.id,
    company: experience.fields.company,
    role: experience.fields.role,
    workTime: experience.fields.workTime,
    description: experience.fields.description,
    techs: experience.fields.techs,
  }));

  return formattedExperiences;
}

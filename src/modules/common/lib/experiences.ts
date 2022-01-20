import fs from 'fs';
import path from 'path';

import type {
  ExperiencesByLocale,
  GetExperiencesParams,
} from '@/modules/common/types';

export function getExperiences(
  { locale = 'en' }: GetExperiencesParams = { locale: 'en' },
) {
  const experienceFilePath = path.resolve('public', 'experiences.json');
  const experienceFile = fs.readFileSync(experienceFilePath, 'utf-8');

  const parsedExperiences = JSON.parse(experienceFile) as ExperiencesByLocale;

  return parsedExperiences[locale];
}

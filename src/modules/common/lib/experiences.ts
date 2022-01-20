import fs from 'fs';
import path from 'path';

type Locale = 'en' | 'ptBR';

type Experience = {
  id: number;
  company: string;
  role: string;
  work_time: string;
  description: string;
};

type ExperiencesByLocale = Record<Locale, Experience[]>;

type GetExperiencesParams = {
  locale?: Locale;
};

export function getExperiences(
  { locale = 'en' }: GetExperiencesParams = { locale: 'en' },
) {
  const experienceFilePath = path.resolve('public', 'experiences.json');
  const experienceFile = fs.readFileSync(experienceFilePath, 'utf-8');

  const parsedExperiences = JSON.parse(experienceFile) as ExperiencesByLocale;

  return parsedExperiences[locale];
}

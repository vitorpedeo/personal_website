import fs from 'fs';
import path from 'path';

type Locale = 'en' | 'ptBR';

type Project = {
  id: number;
  company: string;
  role: string;
  work_time: string;
  description: string;
};

type ProjectsByLocale = Record<Locale, Project[]>;

type GetProjectsParams = {
  locale?: Locale;
};

export function getProjects(
  { locale = 'en' }: GetProjectsParams = { locale: 'en' },
) {
  const projectFilePath = path.resolve('public', 'projects.json');
  const projectFile = fs.readFileSync(projectFilePath, 'utf-8');

  const parsedProjects = JSON.parse(projectFile) as ProjectsByLocale;
  const parsedProjectsWithImage = parsedProjects[locale].map(project => ({
    ...project,
    image: `/images/projects/${project.id}.jpg`,
  }));

  return parsedProjectsWithImage;
}

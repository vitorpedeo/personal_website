import fs from 'fs';
import path from 'path';

import type {
  GetProjectsParams,
  ProjectsByLocale,
} from '@/modules/common/types';

export function getProjects(
  { locale = 'en' }: GetProjectsParams = { locale: 'en' },
) {
  const projectFilePath = path.resolve('public', 'projects.json');
  const projectFile = fs.readFileSync(projectFilePath, 'utf-8');

  const parsedProjects = JSON.parse(projectFile) as ProjectsByLocale;

  return parsedProjects[locale];
}

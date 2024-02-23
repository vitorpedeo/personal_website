import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { fetchProjects } from '@/actions';
import { Project } from '@/components/projects/project';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('projects');

	return {
		title: `vitorpedeo.dev | ${t('title')}`,
		description: t('description'),
	};
}

export default async function Projects() {
	const t = await getTranslations('projects');

	const projects = await fetchProjects();

	return (
		<div className="flex flex-col gap-12 items-start">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold">{t('title')}</h1>
				<p className="text-body leading-7">{t('description')}</p>
			</div>

			<div className="w-full grid gap-8 md:grid-cols-2">
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</div>
	);
}

import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Project } from '@/components/projects/project';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('projects');

	return {
		title: `vitorpedeo.dev | ${t('title')}`,
		description: t('description'),
	};
}

export default function AboutMe() {
	const t = useTranslations();

	return (
		<div className="flex flex-col gap-12 items-start">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold">{t('projects.title')}</h1>
				<p className="text-body leading-7">{t('projects.description')}</p>
			</div>

			<div className="w-full grid gap-8 md:grid-cols-2">
				{Array.from({ length: 4 }).map((_, index) => (
					<Project key={index} />
				))}
			</div>
		</div>
	);
}

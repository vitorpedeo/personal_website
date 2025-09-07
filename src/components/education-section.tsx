import { useTranslations } from 'next-intl';

import { ExperienceItemType, WorkExperience } from './work-experience';

const education = [
	{
		degree: 'Bachelor of Computer Science',
		university: 'University of São Paulo',
		location: 'São Paulo, Brazil',
		period: '2016 - 2020',
		description:
			'Focused on software engineering, algorithms, data structures, and computer science fundamentals.',
	},
	{
		degree: 'Full Stack Web Development Bootcamp',
		school: 'Rocketseat',
		location: 'Online',
		period: '2019',
		description:
			'Intensive program covering modern web development technologies including React, Node.js, and mobile development.',
	},
	{
		degree: 'React Native Specialization',
		school: 'Alura',
		location: 'Online',
		period: '2020',
		description:
			'Advanced course on mobile development with React Native, covering navigation, state management, and native modules.',
	},
];

export function EducationSection() {
	const t = useTranslations('Education');

	const workExperiences: ExperienceItemType[] = [
		{
			id: 'ufg',
			companyName: t('educations.ufg.name'),
			positions: [
				{
					id: '1',
					title: t('educations.ufg.title'),
					employmentPeriod: '03/2019 - 07/2023',
					icon: 'education',
					description: t('educations.ufg.description'),
					isExpanded: true,
				},
			],
			isCurrentEmployer: false,
		},
		{
			id: 'intelectual',
			companyName: t('educations.intelectual.name'),
			positions: [
				{
					id: '1',
					title: t('educations.intelectual.title'),
					employmentPeriod: '01/2016 - 12/2018',
					icon: 'education',
					description: t('educations.intelectual.description'),
					isExpanded: true,
				},
			],
			isCurrentEmployer: false,
		},
	];

	return (
		<section id="education" className="py-20 px-4">
			<div className="mx-auto max-w-3xl space-y-6">
				<h2 className="text-3xl font-bold text-foreground text-center md:text-left">
					{t('title')}
				</h2>

				<WorkExperience
					className="w-full rounded-lg border"
					experiences={workExperiences}
				/>
			</div>
		</section>
	);
}

import { useTranslations } from 'next-intl';

import { ExperienceItemType, WorkExperience } from './work-experience';

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

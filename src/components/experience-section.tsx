import { useTranslations } from 'next-intl';

import { ExperienceItemType, WorkExperience } from './work-experience';

export function ExperienceSection() {
	const t = useTranslations('Experience');

	const workExperiences: ExperienceItemType[] = [
		{
			id: 'igd',
			companyName: 'Ignição Digital',
			companyLogo:
				'https://ignicaodigital.com.br/wp-content/uploads/2024/09/Frame-3.png',
			positions: [
				{
					id: '1',
					title: t('roles.fullStackDeveloper'),
					employmentPeriod: `10/2023 - ${t('roles.currentWorkplace')}`,
					employmentType: t('roles.fullTimeEmploymentType'),
					icon: 'code',
					description: t('roles.igdExperience'),
					skills: [
						'Next.js',
						'React',
						'Node.js',
						'NestJS',
						'GraphQL',
						'Docker',
						'PostgreSQL',
						'Bitbucket',
						'Azure',
					],
					isExpanded: true,
				},
			],
			isCurrentEmployer: true,
		},
		{
			id: 'novo-mundo',
			companyName: 'Novo Mundo',
			companyLogo:
				'https://www.novomundo.com.br/pwa/icons/nm-logo-pwa-180x180.png',
			positions: [
				{
					id: '1',
					title: t('roles.fullStackDeveloper'),
					employmentPeriod: '03/2022 - 10/2023',
					employmentType: t('roles.fullTimeEmploymentType'),
					icon: 'code',
					description: t('roles.novoMundoExperience'),
					skills: [
						'React',
						'VueJS',
						'Flutter',
						'Laravel',
						'VtexIO',
						'Oracle Forms',
						'PL/SQL',
						'Oracle SQL',
						'Firebase',
						'GitHub',
					],
					isExpanded: true,
				},
			],
			isCurrentEmployer: false,
		},
		{
			id: 'contta',
			companyName: 'Contta Inteligência Fiscal',
			positions: [
				{
					id: '1',
					title: t('roles.frontEndDeveloper'),
					employmentPeriod: '10/2020 - 11/2021',
					employmentType: t('roles.fullTimeEmploymentType'),
					icon: 'code',
					description: t('roles.conttaExperience'),
					skills: ['React', 'GitLab'],
					isExpanded: true,
				},
			],
			isCurrentEmployer: false,
		},
	];

	return (
		<section id="experience" className="pt-20">
			<div className="max-w-3xl px-4 mx-auto space-y-6">
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

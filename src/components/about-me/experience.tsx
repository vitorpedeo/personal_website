import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { IExperience } from '@/types';
import { formatDate } from '@/utils';

type IExperiencieProps = {
	experience: IExperience;
};

export function Experiencie({ experience }: IExperiencieProps) {
	const t = useTranslations('about-me');

	return (
		<div className="mt-8 flex flex-col gap-5">
			<div className="flex flex-wrap gap-4 items-start justify-between">
				<div className="flex flex-col gap-1.5">
					<p className="text-xl font-semibold">{experience.company}</p>
					<p className="text-body text-base leading-7">
						{experience.localization}
					</p>
				</div>

				<p className="px-6 py-2 rounded bg-accent shadow-md">
					<span className="inline-block first-letter:uppercase">
						{formatDate(experience.startDate)}
					</span>{' '}
					-{' '}
					<span className="inline-block first-letter:uppercase">
						{formatDate(experience.endDate) || t('experience.current')}
					</span>
				</p>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">{t('experience.role')}</p>
				<p className="text-body text-base leading-7">{experience.role}</p>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">
					{t('experience.responsibilities')}
				</p>
				<ul className="pl-4 list-disc flex flex-col gap-0.5">
					{experience.responsibilities.map((responsibility, index) => (
						<li key={index} className="text-body text-base leading-7">
							{responsibility}
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">{t('experience.techs')}</p>
				<ul className="mt-2 grid gap-8 grid-cols-2 sm:grid-cols-3">
					{experience.techs.map((tech, index) => (
						<li
							key={index}
							className="px-3 py-1.5 rounded bg-accent shadow-md flex gap-2 items-center justify-center"
						>
							<Image
								src={tech.logo}
								alt={tech.name}
								width={12}
								height={12}
								unoptimized
							/>
							<p className="text-body text-xs leading-7">{tech.name}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

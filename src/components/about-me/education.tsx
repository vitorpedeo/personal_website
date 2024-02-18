import { useTranslations } from 'next-intl';

import { IEducation } from '@/types';
import { formatDate } from '@/utils';

type IEducationProps = {
	education: IEducation;
};

export function Education({ education }: IEducationProps) {
	const t = useTranslations('about-me');

	return (
		<div className="mt-8 flex flex-col gap-5">
			<div className="flex flex-wrap gap-4 items-start justify-between">
				<div className="flex flex-col gap-1.5">
					<p className="text-xl font-semibold">{education.institution}</p>
					<p className="text-body text-base leading-7">{education.degree}</p>
				</div>

				<p className="px-6 py-2 rounded bg-accent shadow-md">
					<span className="inline-block first-letter:uppercase">
						{formatDate(education.startDate)}
					</span>{' '}
					-{' '}
					<span className="inline-block first-letter:uppercase">
						{formatDate(education.endDate) || t('education.current')}
					</span>
				</p>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">{t('education.summary')}</p>
				<p className="text-body text-base leading-7">{education.summary}</p>
			</div>
		</div>
	);
}

import { getTranslations } from 'next-intl/server';

import { fetchAboutMe } from '@/actions';
import { DownloadCVButtons } from '@/components/about-me/download-cv-buttons';
import { Education } from '@/components/about-me/education';
import { Experiencie } from '@/components/about-me/experience';

export default async function AboutMe() {
	const t = await getTranslations('about-me');

	const { experiences, educations } = await fetchAboutMe();

	return (
		<div className="flex flex-col gap-12 items-start">
			<section className="w-full flex gap-16">
				<div className="flex-1 flex flex-col gap-12">
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl font-bold">{t('title')}</h1>
						<p className="text-body leading-7">{t('description')}</p>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">{t('curriculum.title')}</h2>
						<p className="text-body leading-7">{t('curriculum.description')}</p>
						<DownloadCVButtons />
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">{t('experience.title')}</h2>
						<p className="text-body leading-7">{t('experience.description')}</p>

						{experiences.map((experience, index) => (
							<Experiencie key={index} experience={experience} />
						))}
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">{t('education.title')}</h2>
						<p className="text-body leading-7">{t('education.description')}</p>

						{educations.map((education, index) => (
							<Education key={index} education={education} />
						))}
					</div>
				</div>

				<div className="py-3 px-4 rounded bg-accent shadow-md hidden md:flex flex-col gap-2 self-start">
					<p className="text-sm font-medium">{t('summary.title')}</p>
					<div className="w-36 h-px round bg-foreground" />
					<ul className="mt-3 list-none flex flex-col gap-1">
						<li>
							<a href="#curriculo" className="text-body text-xs">
								{t('summary.curriculum')}
							</a>
						</li>
						<li>
							<a href="#experiencia" className="text-body text-xs">
								{t('summary.experience')}
							</a>
						</li>
						<li>
							<a href="#formacao" className="text-body text-xs">
								{t('summary.education')}
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

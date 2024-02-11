import { useTranslations } from 'next-intl';

import { DownloadCVButtons } from '@/components/about-me/download-cv-buttons';
import { Education } from '@/components/about-me/education';
import { Experiencie } from '@/components/about-me/experience';

export default function AboutMe() {
	const t = useTranslations();

	return (
		<div className="flex flex-col gap-12 items-start">
			<section className="w-full flex gap-16">
				<div className="flex-1 flex flex-col gap-12">
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl font-bold">{t('about-me.title')}</h1>
						<p className="text-body leading-7">{t('about-me.description')}</p>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">
							{t('about-me.curriculum.title')}
						</h2>
						<p className="text-body leading-7">
							{t('about-me.curriculum.description')}
						</p>
						<DownloadCVButtons />
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">
							{t('about-me.experience.title')}
						</h2>
						<p className="text-body leading-7">
							{t('about-me.experience.description')}
						</p>
						<Experiencie />
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">
							{t('about-me.education.title')}
						</h2>
						<p className="text-body leading-7">
							{t('about-me.education.description')}
						</p>
						<Education />
					</div>
				</div>

				<div className="py-3 px-4 rounded bg-accent shadow-md hidden md:flex flex-col gap-2 self-start">
					<p className="text-sm font-medium">{t('about-me.summary.title')}</p>
					<div className="w-36 h-px round bg-foreground" />
					<ul className="mt-3 list-none flex flex-col gap-1">
						<li>
							<a href="#curriculo" className="text-body text-xs">
								{t('about-me.summary.curriculum')}
							</a>
						</li>
						<li>
							<a href="#experiencia" className="text-body text-xs">
								{t('about-me.summary.experience')}
							</a>
						</li>
						<li>
							<a href="#formacao" className="text-body text-xs">
								{t('about-me.summary.education')}
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

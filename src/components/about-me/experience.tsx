import { useTranslations } from 'next-intl';

export function Experiencie() {
	const t = useTranslations();

	return (
		<div className="mt-8 flex flex-col gap-5">
			<div className="flex flex-wrap gap-4 items-start justify-between">
				<div className="flex flex-col gap-1.5">
					<p className="text-xl font-semibold">Nome da Empresa</p>
					<p className="text-body text-base leading-7">Localização</p>
				</div>

				<p className="px-6 py-2 rounded bg-accent shadow-md">
					Jan. 2024 - Jan. 2024
				</p>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">{t('about-me.experience.role')}</p>
				<p className="text-body text-base leading-7">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
					nibh nec velit ornare accumsan. Maecenas scelerisque mollis sem, vel
					bibendum lectus euismod vel. Mauris fermentum, nisl at semper
					ullamcorper.
				</p>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">
					{t('about-me.experience.responsibilities')}
				</p>
				<ul className="pl-4 list-disc flex flex-col gap-0.5">
					<li className="text-body text-base leading-7">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
						nibh nec velit ornare accumsan.
					</li>
					<li className="text-body text-base leading-7">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
						nibh nec velit ornare accumsan.
					</li>
					<li className="text-body text-base leading-7">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
						nibh nec velit ornare accumsan.
					</li>
				</ul>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">
					{t('about-me.experience.techs')}
				</p>
				<ul className="mt-2 grid gap-8 grid-cols-2 sm:grid-cols-3">
					<li className="px-3 py-1.5 rounded bg-accent shadow-md text-body text-xs leading-7 text-center">
						React
					</li>
					<li className="px-3 py-1.5 rounded bg-accent shadow-md text-body text-xs leading-7 text-center">
						React
					</li>
					<li className="px-3 py-1.5 rounded bg-accent shadow-md text-body text-xs leading-7 text-center">
						React
					</li>
				</ul>
			</div>
		</div>
	);
}

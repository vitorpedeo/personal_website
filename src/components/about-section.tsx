import { useTranslations } from 'next-intl';

export function AboutSection() {
	const t = useTranslations('About');

	return (
		<section id="about" className="pt-20">
			<div className="max-w-3xl px-4 mx-auto">
				<div className="text-center md:text-left space-y-6">
					<h2 className="text-3xl font-bold text-foreground">{t('title')}</h2>
					<p className="text-base text-muted-foreground leading-relaxed">
						{t('description.firstParagraph')}
						<br />
						<br />
						{t('description.secondParagraph')}
						<br />
						<br />
						{t('description.thirdParagraph')}
					</p>
				</div>
			</div>
		</section>
	);
}

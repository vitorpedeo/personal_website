import { useTranslations } from 'next-intl';

export function AboutSection() {
	const t = useTranslations('About');

	return (
		<section id="about" className="py-20 px-4">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center space-y-8">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground">
						{t('title')}
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
						{t('description')}
					</p>
				</div>
			</div>
		</section>
	);
}

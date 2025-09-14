import { useTranslations } from 'next-intl';

export function BlogSection() {
	const t = useTranslations('Blog');

	return (
		<section id="blog" className="pt-20">
			<div className="max-w-3xl px-4 mx-auto space-y-16">
				<h2 className="text-3xl font-bold text-foreground text-center md:text-left">
					{t('title')}
				</h2>

				<div className="text-center">
					<p className="text-muted-foreground text-lg max-w-md mx-auto">
						{t('subtitle')}
					</p>
				</div>
			</div>
		</section>
	);
}

import { useTranslations } from 'next-intl';

import { LocaleToggle } from '@/components/locale-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
	const t = useTranslations('HomePage');
	const tFeatures = useTranslations('Features');

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center space-y-8 p-8">
				<div className="flex justify-end gap-2 mb-4">
					<LocaleToggle />
					<ThemeToggle />
				</div>
				<h1 className="text-4xl font-bold text-foreground">{t('title')}</h1>
				<p className="text-lg text-muted-foreground max-w-2xl">
					{t('description')}
				</p>
				<div className="flex gap-4 justify-center">
					<Button>{t('primaryButton')}</Button>
					<Button variant="secondary">{t('secondaryButton')}</Button>
					<Button variant="outline">{t('outlineButton')}</Button>
				</div>
				<div className="text-sm text-muted-foreground">
					<p>{tFeatures('prettier')}</p>
					<p>{tFeatures('eslint')}</p>
					<p>{tFeatures('shadcn')}</p>
					<p>{tFeatures('theme')}</p>
					<p>{tFeatures('i18n')}</p>
				</div>
			</div>
		</div>
	);
}

'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from '@/i18n/navigation';

export function LocaleToggle() {
	const t = useTranslations('Language');
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const isEnglishLocale = locale === 'en';
	const title = t(isEnglishLocale ? 'toPortuguese' : 'toEnglish');

	const switchLocale = () => {
		router.replace(pathname, { locale: isEnglishLocale ? 'pt' : 'en' });
	};

	return (
		<Button
			type="button"
			variant="outline"
			className="size-8 rounded-full"
			onClick={switchLocale}
			aria-label={title}
			title={title}
		>
			<span className="text-xs">{isEnglishLocale ? '🇺🇸' : '🇧🇷'}</span>
			<span className="sr-only">{title}</span>
		</Button>
	);
}

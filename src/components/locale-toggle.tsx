'use client';

import { useLocale, useTranslations } from 'next-intl';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { useRouter } from '@/i18n/navigation';

export function LocaleToggle() {
	const t = useTranslations('Language');

	const locale = useLocale();

	const router = useRouter();

	const isEnglishLocale = locale === 'en';
	const title = t(isEnglishLocale ? 'toPortuguese' : 'toEnglish');

	const switchLocale = () => {
		router.replace('/', { locale: isEnglishLocale ? 'pt' : 'en' });
	};

	return (
		<Button
			variant="outline"
			className="size-8 rounded-full"
			onClick={switchLocale}
			title={title}
		>
			<p className="text-xs">{isEnglishLocale ? '🇺🇸' : '🇧🇷'}</p>
			<span className="sr-only">{title}</span>
		</Button>
	);
}

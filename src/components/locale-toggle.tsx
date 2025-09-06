'use client';

import { Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from '@/i18n/navigation';

export function LocaleToggle() {
	const t = useTranslations('Language');
	const locale = useLocale();
	const router = useRouter();

	const switchLocale = (newLocale: string) => {
		router.replace('/', { locale: newLocale });
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Globe className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">{t('toggle')}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => switchLocale('en')}
					className={locale === 'en' ? 'bg-accent' : ''}
				>
					🇺🇸 {t('english')}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => switchLocale('pt')}
					className={locale === 'pt' ? 'bg-accent' : ''}
				>
					🇧🇷 {t('portuguese')}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

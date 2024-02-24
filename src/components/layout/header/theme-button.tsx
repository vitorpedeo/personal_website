'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useBreakpoint } from 'use-breakpoint';

import { Button } from '@/components/ui/button';

export function ThemeButton() {
	const t = useTranslations('hamburguer-menu');

	const { breakpoint } = useBreakpoint({ mobile: 0, rest: 640 }, 'mobile');

	const { theme, setTheme } = useTheme();

	const isLight = theme === 'light';
	const isMobile = breakpoint === 'mobile';

	function changeTheme() {
		setTheme(isLight ? 'dark' : 'light');
	}

	if (isMobile) {
		return (
			<Button
				variant="ghost"
				className="gap-2 justify-start"
				onClick={changeTheme}
			>
				{isLight ? <Moon size={20} /> : <Sun size={20} />} {t('theme')}
			</Button>
		);
	}

	return (
		<Button variant="ghost" size="icon" onClick={changeTheme}>
			{isLight ? <Moon size={20} /> : <Sun size={20} />}
		</Button>
	);
}

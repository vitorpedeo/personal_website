'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
	const t = useTranslations('Theme');

	const { theme, setTheme } = useTheme();

	const isDark = theme === 'dark';
	const title = t(isDark ? 'toLight' : 'toDark');

	function handleThemeToggle() {
		setTheme(isDark ? 'light' : 'dark');
	}

	return (
		<Button
			variant="outline"
			className="size-8 rounded-full"
			onClick={handleThemeToggle}
			title={title}
		>
			<Sun className="size-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute size-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">{title}</span>
		</Button>
	);
}

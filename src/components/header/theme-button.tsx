'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeButton() {
	const { theme, setTheme } = useTheme();

	const isLight = theme === 'light';

	function changeTheme() {
		setTheme(isLight ? 'dark' : 'light');
	}

	return (
		<Button variant="ghost" size="icon" onClick={changeTheme}>
			{isLight ? <Moon size={20} /> : <Sun size={20} />}
		</Button>
	);
}

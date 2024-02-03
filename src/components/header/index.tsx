import Link from 'next/link';

import { LangButton } from './lang-button';
import { ThemeButton } from './theme-button';

export function Header() {
	return (
		<header className="w-full flex items-center justify-between">
			<Link href="/" className="text-2xl font-extrabold">
				{'<vitorpedeo/>'}
			</Link>

			<div className="flex gap-6 items-center">
				<LangButton />
				<ThemeButton />
			</div>
		</header>
	);
}

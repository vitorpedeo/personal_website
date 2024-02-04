import Link from 'next/link';

import { LangButton } from './lang-button';
import { Links } from './links';
import { ThemeButton } from './theme-button';

export function Header() {
	return (
		<header className="w-full flex items-center justify-between">
			<Link href="/" className="text-2xl font-extrabold">
				{'<vitorpedeo/>'}
			</Link>

			<div className="hidden sm:inline-block">
				<Links />
			</div>

			<div className="hidden sm:flex gap-6 items-center">
				<LangButton />
				<ThemeButton />
			</div>
		</header>
	);
}

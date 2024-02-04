import { DrawerButton } from './drawer-button';
import { LangButton } from './lang-button';
import { Links } from './links';
import { Logo } from './logo';
import { ThemeButton } from './theme-button';

export function Header() {
	return (
		<header className="w-full flex items-center justify-between">
			<Logo />

			<div className="hidden sm:inline-block">
				<Links />
			</div>

			<div className="hidden sm:flex gap-6 items-center">
				<LangButton />
				<ThemeButton />
			</div>

			<DrawerButton />
		</header>
	);
}

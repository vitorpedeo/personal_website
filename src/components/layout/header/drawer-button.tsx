import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';

import { LangButton } from './lang-button';
import { Links } from './links';
import { Logo } from './logo';
import { ThemeButton } from './theme-button';

export function DrawerButton() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="flex sm:hidden">
					<Menu size={20} />
				</Button>
			</SheetTrigger>

			<SheetContent className="sm:hidden" overlayClassName="sm:hidden">
				<SheetHeader className="items-start">
					<Logo />
				</SheetHeader>

				<Links />

				<div className="flex gap-4">
					<ThemeButton />
					<LangButton />
				</div>
			</SheetContent>
		</Sheet>
	);
}

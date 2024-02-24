'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
	const [isOpen, setIsOpen] = useState(false);

	const pathname = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
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

				<div className="mt-8 flex flex-col gap-4">
					<ThemeButton />
					<LangButton />
				</div>
			</SheetContent>
		</Sheet>
	);
}

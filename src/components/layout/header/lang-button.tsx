'use client';

import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '@/components/ui/menubar';
import { usePathname, useRouter } from '@/navigation';

export function LangButton() {
	const pathname = usePathname();
	const router = useRouter();

	function changeLocale(locale: 'en' | 'pt') {
		router.replace(pathname, { locale });
	}

	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger asChild>
					<Button variant="ghost" size="icon">
						<Languages size={20} />
					</Button>
				</MenubarTrigger>

				<MenubarContent>
					<MenubarItem onClick={() => changeLocale('en')}>EN</MenubarItem>
					<MenubarItem onClick={() => changeLocale('pt')}>PT</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}

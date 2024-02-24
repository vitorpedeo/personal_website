'use client';

import { Languages } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useBreakpoint } from 'use-breakpoint';

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
	const t = useTranslations('hamburguer-menu');

	const { breakpoint } = useBreakpoint({ mobile: 0, rest: 640 }, 'mobile');

	const pathname = usePathname();
	const router = useRouter();

	const isMobile = breakpoint === 'mobile';

	function changeLocale(locale: 'en' | 'pt') {
		router.replace(pathname, { locale });
	}

	return (
		<Menubar className="w-full sm:w-auto shadow-none">
			<MenubarMenu>
				<MenubarTrigger asChild>
					{isMobile ? (
						<Button variant="ghost" className="w-full gap-2 justify-start">
							<Languages size={20} /> {t('language')}
						</Button>
					) : (
						<Button variant="ghost" size="icon">
							<Languages size={20} />
						</Button>
					)}
				</MenubarTrigger>

				<MenubarContent>
					<MenubarItem onClick={() => changeLocale('en')}>EN</MenubarItem>
					<MenubarItem onClick={() => changeLocale('pt')}>PT</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}

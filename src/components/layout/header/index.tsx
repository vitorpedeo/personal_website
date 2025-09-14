'use client';

import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { LocaleToggle } from '@/components/layout/header/locale-toggle';
import { ThemeToggle } from '@/components/layout/header/theme-toggle';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from '@/i18n/navigation';

export function Header() {
	const t = useTranslations('Navigation');
	const [isOpen, setIsOpen] = useState(false);

	const navigationItems = [
		{ key: 'tech', href: '#tech' },
		{ key: 'experience', href: '#experience' },
		{ key: 'blog', href: '#blog' },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
			<div className="max-w-3xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="font-mono text-lg font-bold">
						v<span className="text-primary text-2xl">/</span>p
					</Link>

					<div className="flex items-center gap-8">
						<nav className="hidden md:flex items-center space-x-8">
							{navigationItems.map(item => (
								<button
									key={item.key}
									onClick={() => scrollToSection(item.href)}
									className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
								>
									{t(item.key as keyof typeof t)}
								</button>
							))}
						</nav>

						<div className="hidden md:flex items-center space-x-2">
							<LocaleToggle />
							<ThemeToggle />
						</div>
					</div>

					<div className="md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="pl-4 w-[300px] sm:w-[400px]"
							>
								<SheetTitle className="sr-only">Sidebar</SheetTitle>
								<div className="flex flex-col space-y-6 mt-8">
									<nav className="flex flex-col space-y-4">
										{navigationItems.map(item => (
											<button
												key={item.key}
												onClick={() => scrollToSection(item.href)}
												className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
											>
												{t(item.key as keyof typeof t)}
											</button>
										))}
									</nav>

									<div className="flex items-center space-x-2 pt-4 border-t border-border">
										<LocaleToggle />
										<ThemeToggle />
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}

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

type HeaderMode = 'home' | 'blog';

type NavigationItem = {
	href: string;
	key: 'blog' | 'experience' | 'home' | 'tech';
	type: 'page' | 'section';
};

export function Header({ mode = 'home' }: { mode?: HeaderMode }) {
	const t = useTranslations('Navigation');
	const [isOpen, setIsOpen] = useState(false);

	const navigationItems: NavigationItem[] =
		mode === 'blog'
			? [
					{ key: 'home', href: '/', type: 'page' },
					{ key: 'blog', href: '/blog', type: 'page' },
				]
			: [
					{ key: 'tech', href: '#tech', type: 'section' },
					{ key: 'experience', href: '#experience', type: 'section' },
					{ key: 'blog', href: '#blog', type: 'section' },
				];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsOpen(false);
	};

	const navigationItemClassName =
		'text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground';

	const mobileNavigationItemClassName =
		'py-2 text-left text-muted-foreground transition-colors duration-200 hover:text-foreground';

	const renderNavigationItem = (item: NavigationItem, className: string) => {
		if (item.type === 'section') {
			return (
				<button
					key={item.key}
					type="button"
					onClick={() => scrollToSection(item.href)}
					className={`cursor-pointer ${className}`}
				>
					{t(item.key)}
				</button>
			);
		}

		return (
			<Link
				key={item.key}
				href={item.href}
				onClick={() => setIsOpen(false)}
				className={className}
			>
				{t(item.key)}
			</Link>
		);
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
							{navigationItems.map(item =>
								renderNavigationItem(item, navigationItemClassName)
							)}
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
										{navigationItems.map(item =>
											renderNavigationItem(item, mobileNavigationItemClassName)
										)}
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

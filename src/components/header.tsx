'use client';

import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { LocaleToggle } from '@/components/locale-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
							<span className="text-primary-foreground font-bold text-sm">
								VP
							</span>
						</div>
						<span className="font-bold text-lg">vitorpedeo.dev</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigationItems.map(item => (
							<button
								key={item.key}
								onClick={() => scrollToSection(item.href)}
								className="text-muted-foreground hover:text-foreground transition-colors duration-200"
							>
								{t(item.key as keyof typeof t)}
							</button>
						))}
					</nav>

					{/* Desktop Controls */}
					<div className="hidden md:flex items-center space-x-2">
						<LocaleToggle />
						<ThemeToggle />
					</div>

					{/* Mobile Menu */}
					<div className="md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
								<div className="flex flex-col space-y-6 mt-8">
									{/* Mobile Navigation */}
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

									{/* Mobile Controls */}
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

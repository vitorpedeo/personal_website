'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Links() {
	const pathname = usePathname();

	const links = [
		{
			href: '/about-me',
			label: 'Sobre mim',
			isActive: pathname === '/about-me',
		},
		{
			href: '/blog',
			label: 'Blog',
			isActive: pathname === '/blog',
		},
		{
			href: '/projects',
			label: 'Projetos',
			isActive: pathname === '/projects',
		},
	];

	if (pathname === '/') {
		return null;
	}

	return (
		<nav className="flex gap-6 items-center">
			{links.map(({ href, label, isActive }) => (
				<Link
					key={href}
					href={href}
					className={clsx({ 'font-medium text-highlight': isActive })}
				>
					{label}
				</Link>
			))}
		</nav>
	);
}

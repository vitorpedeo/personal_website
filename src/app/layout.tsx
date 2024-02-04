import './globals.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'vitorpedeo.dev',
	description: 'My personal website and blog.',
	creator: 'Vitor Pereira',
	authors: [{ name: 'Vitor Pereira', url: 'https://github.com/vitorpedeo' }],
	keywords: ['vitorpedeo', 'vitor', 'pereira', 'personal', 'website', 'blog'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-gradient font-sans antialiased',
					rubik.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="mx-auto min-h-screen pt-8 container">
						<Header />
						<section className="pt-12 pb-6 min-h-content grid">
							{children}
						</section>
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}

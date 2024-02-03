import './globals.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

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
					'min-h-screen bg-background font-sans antialiased',
					rubik.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

import '@/app/globals.css';

import { Geist_Mono, Mulish } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';

const mulishSans = Mulish({
	variable: '--font-mulish-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Metadata' });

	return {
		title: 'vitorpedeo.dev',
		description: t('description'),
		creator: 'Vitor Pereira',
		authors: [{ name: 'Vitor Pereira', url: 'https://github.com/vitorpedeo' }],
		keywords: [
			'vitorpedeo',
			'dev',
			'vitor',
			'pereira',
			'personal',
			'website',
			'blog',
			'react',
			'react native',
			'nextjs',
			'typescript',
			'nodejs',
			'nestjs',
			'laravel',
		],
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen font-sans antialiased',
					mulishSans.variable,
					geistMono.variable
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'pt'] as const;

export const pathnames = {
	'/': '/',
	'/blog': '/blog',
	'/about-me': {
		en: '/about-me',
		pt: '/sobre-mim',
	},
	'/projects': {
		en: '/projects',
		pt: '/projetos',
	},
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;

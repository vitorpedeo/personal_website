import createMiddleware from 'next-intl/middleware';

import { localePrefix, locales, pathnames } from '@/config';

export default createMiddleware({
	locales,
	localePrefix,
	pathnames,
	defaultLocale: 'pt',
});

export const config = {
	matcher: ['/', '/(pt|en)/:path*'],
};

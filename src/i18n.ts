import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
	const baseLocale = new Intl.Locale(locale).baseName;

	if (!['en', 'pt'].includes(baseLocale)) notFound();

	if (!locales.includes(baseLocale as 'en' | 'pt')) notFound();

	return {
		messages: (await import(`./messages/${baseLocale}.json`)).default,
	};
});

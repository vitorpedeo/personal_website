import { getLocale } from './locale';

export function maskDate(date?: string | null) {
	if (!date) {
		return '';
	}

	const locale = getLocale();

	const localeToFormat = locale === 'pt' ? 'pt-BR' : 'en-US';

	return new Date(date).toLocaleDateString(localeToFormat, {
		year: 'numeric',
		month: 'short',
	});
}

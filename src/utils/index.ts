import { cookies } from 'next/headers';

export function formatDate(date?: string | null) {
	if (!date) {
		return '';
	}

	const cookiesStore = cookies();
	const locale = cookiesStore.get('NEXT_LOCALE')?.value ?? 'pt';

	const localeToFormat = locale === 'pt' ? 'pt-BR' : 'en-US';

	return new Date(date).toLocaleDateString(localeToFormat, {
		year: 'numeric',
		month: 'short',
	});
}

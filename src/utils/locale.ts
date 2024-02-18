import { cookies } from 'next/headers';

export function getLocale() {
	const cookiesStore = cookies();
	const locale = cookiesStore.get('NEXT_LOCALE')?.value ?? 'pt';

	return locale;
}

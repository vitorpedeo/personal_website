import { useTranslations } from 'next-intl';

export function Footer() {
	const t = useTranslations();

	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-8 text-body flex items-center justify-center">
			<p>
				© {currentYear} Vitor Pereira. {t('footer.rights')}
			</p>
		</footer>
	);
}

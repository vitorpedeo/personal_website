export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-8 flex items-center justify-center">
			<p>© {currentYear} Vitor Pereira. All rights reserved</p>
		</footer>
	);
}

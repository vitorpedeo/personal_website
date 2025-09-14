import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export function Footer() {
	const t = useTranslations('Footer');

	return (
		<footer id="contact" className="bg-background border-t border-border">
			<div className="max-w-3xl mx-auto px-4 py-12">
				<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					<div className="flex flex-col items-center md:items-start space-y-2">
						<Link href="/" className="font-mono text-lg font-bold">
							v<span className="text-primary text-2xl">/</span>p
						</Link>

						<p className="text-sm text-muted-foreground text-center md:text-left">
							{t('builtWith')}
						</p>
					</div>

					<div className="flex space-x-4">
						<Button variant="ghost" size="icon" asChild>
							<a
								href="https://github.com/vitorpedeo"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<Github className="h-4 w-4" />
							</a>
						</Button>
						<Button variant="ghost" size="icon" asChild>
							<a
								href="https://linkedin.com/in/vitorpedeo"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-4 w-4" />
							</a>
						</Button>
						<Button variant="ghost" size="icon" asChild>
							<a href="mailto:vitorpereiradeoli@gmail.com" aria-label="Email">
								<Mail className="h-4 w-4" />
							</a>
						</Button>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-border text-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Vitor Pereira. {t('rights')}
					</p>
				</div>
			</div>
		</footer>
	);
}

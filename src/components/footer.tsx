import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

export function Footer() {
	const t = useTranslations('Footer');

	return (
		<footer id="contact" className="bg-background border-t border-border">
			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					{/* Logo and Description */}
					<div className="flex flex-col items-center md:items-start space-y-2">
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
								<span className="text-primary-foreground font-bold text-sm">
									VP
								</span>
							</div>
							<span className="font-bold text-lg">vitorpedeo.dev</span>
						</div>
						<p className="text-sm text-muted-foreground text-center md:text-left">
							{t('builtWith')}
						</p>
					</div>

					{/* Social Links */}
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
							<a
								href="https://twitter.com/vitorpedeo"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<Twitter className="h-4 w-4" />
							</a>
						</Button>
						<Button variant="ghost" size="icon" asChild>
							<a href="mailto:hello@vitorpedeo.dev" aria-label="Email">
								<Mail className="h-4 w-4" />
							</a>
						</Button>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 pt-8 border-t border-border text-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Vitor Pereira. {t('rights')}
					</p>
				</div>
			</div>
		</footer>
	);
}

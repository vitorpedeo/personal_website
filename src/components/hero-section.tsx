'use client';

import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { AnimatedText } from '@/components/animated-text';
import { Button } from '@/components/ui/button';

export function HeroSection() {
	const t = useTranslations('Hero');
	const animatedTexts = t.raw('animatedTexts') as string[];

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center px-4 pt-16"
		>
			<div className="text-center space-y-8 max-w-4xl mx-auto">
				{/* Avatar */}
				<div className="flex justify-center">
					<div className="relative">
						<div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-2xl">
							VP
						</div>
						<div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/60 rounded-full blur opacity-30"></div>
					</div>
				</div>

				{/* Name */}
				<h1 className="text-5xl md:text-7xl font-bold text-foreground">
					{t('name')}
				</h1>

				{/* Animated Subtitle */}
				<div className="text-2xl md:text-3xl text-muted-foreground h-12 flex items-center justify-center">
					<AnimatedText texts={animatedTexts} />
				</div>

				{/* Description */}
				<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
					{t('description')}
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Button size="lg" className="w-full sm:w-auto">
						<Download className="mr-2 h-4 w-4" />
						{t('downloadResume')}
					</Button>
				</div>

				{/* Social Links */}
				<div className="flex justify-center space-x-4 pt-8">
					<Button variant="outline" size="icon" asChild>
						<a
							href="https://github.com/vitorpedeo"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<Github className="h-4 w-4" />
						</a>
					</Button>
					<Button variant="outline" size="icon" asChild>
						<a
							href="https://linkedin.com/in/vitorpedeo"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<Linkedin className="h-4 w-4" />
						</a>
					</Button>
					<Button variant="outline" size="icon" asChild>
						<a
							href="https://twitter.com/vitorpedeo"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
						>
							<Twitter className="h-4 w-4" />
						</a>
					</Button>
					<Button variant="outline" size="icon" asChild>
						<a href="mailto:hello@vitorpedeo.dev" aria-label="Email">
							<Mail className="h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}

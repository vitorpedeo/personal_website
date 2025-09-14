'use client';

import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

import { AnimatedText } from './animated-text';

export function HeroSection() {
	const t = useTranslations('Hero');
	const locale = useLocale();
	const animatedTexts = t.raw('animatedTexts') as string[];

	const handleDownloadResume = () => {
		const resumeFile = locale === 'pt' ? 'pt.pdf' : 'en.pdf';
		const link = document.createElement('a');
		link.href = `/resumes/${resumeFile}`;
		link.download = `Vitor_Pereira_Resume_${locale.toUpperCase()}.pdf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<section id="hero" className="max-w-3xl mx-auto px-4 pt-32 space-y-8">
			<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
				<div className="relative">
					<div className="relative size-24 sm:size-32 bg-primary rounded-full">
						<Image
							src="/images/profile.webp"
							alt={t('profileImageAltText')}
							className="rounded-full object-cover object-top ring-1 ring-border ring-offset-2 ring-offset-background"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							fill
							priority
						/>
					</div>

					<Image
						src="/images/brazil-flag.webp"
						alt={t('flagImageAltText')}
						className="-top-2 -left-2 absolute w-12 h-8"
						width={48}
						height={32}
						priority
					/>
				</div>

				<div className="space-y-1">
					<h1 className="text-3xl font-bold text-foreground text-center md:text-left">
						Vitor Pereira
					</h1>

					<div className="text-base text-muted-foreground text-center md:text-left">
						<AnimatedText texts={animatedTexts} />
					</div>

					<p className="text-base text-muted-foreground text-center md:text-left">
						{t('description')}
					</p>

					<div className="mt-3 text-muted-foreground flex gap-2 items-center justify-center md:justify-start">
						<MapPin className="h-4 w-4" />
						<span className="text-sm">{t('location')}</span>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center">
				<Button
					size="lg"
					className="w-full sm:w-auto"
					onClick={handleDownloadResume}
				>
					<Download className="mr-2 h-4 w-4" />
					{t('downloadResume')}
				</Button>
			</div>

			<div className="flex justify-center space-x-4">
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
					<a href="mailto:vitorpereiradeoli@gmail.com" aria-label="Email">
						<Mail className="h-4 w-4" />
					</a>
				</Button>
			</div>
		</section>
	);
}

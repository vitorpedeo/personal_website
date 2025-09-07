import { ExternalLink, GitBranch } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

export function ProjectsSection() {
	const t = useTranslations('Projects');

	const projects = [
		{
			id: 1,
			title: t('projects.primedash.title'),
			description: t('projects.primedash.description'),
			image: '/images/projects/primedash.webp',
			technologies: [
				'React',
				'TypeScript',
				'Vite',
				'NestJS',
				'Stripe',
				'PostgreSQL',
			],
			liveUrl: 'https://primedash.com.br',
			projectUrl: null,
			featured: true,
		},
		{
			id: 2,
			title: t('projects.perninhaEntregas.title'),
			description: t('projects.perninhaEntregas.description'),
			image: '/images/projects/perninha-entregas.webp',
			technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
			liveUrl: 'https://perninhaentregas.com.br',
			projectUrl: null,
			featured: true,
		},
		{
			id: 3,
			title: t('projects.megaModa.title'),
			description: t('projects.megaModa.description'),
			image: '/images/projects/mega-moda.webp',
			technologies: ['Flutter', 'Firebase', 'Vtex'],
			liveUrl: 'https://apps.apple.com/br/app/mega-moda/id6444265826',
			projectUrl: null,
			featured: false,
		},
		{
			id: 4,
			title: t('projects.localiza.title'),
			description: t('projects.localiza.description'),
			image: '/images/projects/localiza.webp',
			technologies: ['React', 'TypeScript', 'Chakra UI', 'Vite'],
			liveUrl: null,
			projectUrl: null,
			featured: false,
		},
	];

	return (
		<section id="projects" className="pt-20">
			<div className="max-w-3xl px-4 mx-auto space-y-6">
				<h2 className="text-3xl font-bold text-foreground text-center md:text-left">
					{t('title')}
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map(project => (
						<div
							key={project.id}
							className="bg-background rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow group"
						>
							<div className="aspect-video bg-muted relative overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="object-cover"
									fill
								/>
								{project.featured && (
									<div className="absolute top-4 left-4 bg-green-600 text-white font-bold text-xs px-2 py-1 rounded-full">
										{t('featured')}
									</div>
								)}
							</div>

							<div className="p-6 space-y-4">
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
										{project.description}
									</p>
								</div>

								<div>
									<p className="text-xs font-medium text-muted-foreground mb-2">
										{t('technologies')}
									</p>
									<div className="flex flex-wrap gap-1">
										{project.technologies.map(tech => (
											<span
												key={tech}
												className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="flex gap-2 pt-2">
									{project.liveUrl && (
										<Button
											variant="default"
											size="sm"
											className="flex-1"
											asChild
										>
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="h-3 w-3 mr-1" />
												{t('viewProject')}
											</a>
										</Button>
									)}

									{project.projectUrl && (
										<Button
											variant="outline"
											size="sm"
											className="flex-1"
											asChild
										>
											<a
												href={project.projectUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<GitBranch className="h-3 w-3 mr-1" />
												{t('viewCode')}
											</a>
										</Button>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

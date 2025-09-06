import { ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

// Mock projects data - in a real app, this would come from a CMS or API
const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and payment processing.',
		image: '/api/placeholder/400/300',
		technologies: [
			'Next.js',
			'TypeScript',
			'Stripe',
			'PostgreSQL',
			'Tailwind CSS',
		],
		liveUrl: 'https://example-ecommerce.com',
		githubUrl: 'https://github.com/vitorpedeo/ecommerce-platform',
		featured: true,
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		image: '/api/placeholder/400/300',
		technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
		liveUrl: 'https://example-tasks.com',
		githubUrl: 'https://github.com/vitorpedeo/task-manager',
		featured: true,
	},
	{
		id: 3,
		title: 'Weather Dashboard',
		description:
			'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful animations.',
		image: '/api/placeholder/400/300',
		technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
		liveUrl: 'https://example-weather.com',
		githubUrl: 'https://github.com/vitorpedeo/weather-dashboard',
		featured: false,
	},
	{
		id: 4,
		title: 'Mobile Banking App',
		description:
			'A React Native mobile banking application with biometric authentication, transaction history, and secure payment features.',
		image: '/api/placeholder/400/300',
		technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Expo'],
		liveUrl: null,
		githubUrl: 'https://github.com/vitorpedeo/mobile-banking',
		featured: false,
	},
	{
		id: 5,
		title: 'Portfolio Website',
		description:
			'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode support.',
		image: '/api/placeholder/400/300',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		liveUrl: 'https://vitorpedeo.dev',
		githubUrl: 'https://github.com/vitorpedeo/portfolio',
		featured: false,
	},
	{
		id: 6,
		title: 'API Documentation Tool',
		description:
			'An interactive API documentation tool that automatically generates documentation from OpenAPI specifications with a beautiful interface.',
		image: '/api/placeholder/400/300',
		technologies: ['Vue.js', 'Node.js', 'OpenAPI', 'Prism.js', 'Docker'],
		liveUrl: 'https://example-api-docs.com',
		githubUrl: 'https://github.com/vitorpedeo/api-docs-tool',
		featured: false,
	},
];

export function ProjectsSection() {
	const t = useTranslations('Projects');

	return (
		<section id="projects" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center space-y-8 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground">
						{t('title')}
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t('subtitle')}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map(project => (
						<div
							key={project.id}
							className="bg-background rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow group"
						>
							{/* Project Image */}
							<div className="aspect-video bg-muted relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
									<span className="text-4xl font-bold text-primary/30">
										{project.title.charAt(0)}
									</span>
								</div>
								{project.featured && (
									<div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
										Featured
									</div>
								)}
							</div>

							{/* Project Content */}
							<div className="p-6 space-y-4">
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
										{project.description}
									</p>
								</div>

								{/* Technologies */}
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

								{/* Action Buttons */}
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
									<Button
										variant="outline"
										size="sm"
										className="flex-1"
										asChild
									>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="h-3 w-3 mr-1" />
											{t('viewCode')}
										</a>
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

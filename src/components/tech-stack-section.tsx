import { useTranslations } from 'next-intl';

const techStack = {
	frontend: [
		{ name: 'React', icon: '⚛️' },
		{ name: 'Next.js', icon: '▲' },
		{ name: 'TypeScript', icon: '🔷' },
		{ name: 'Tailwind CSS', icon: '🎨' },
		{ name: 'shadcn/ui', icon: '🧩' },
		{ name: 'React Query', icon: '🔄' },
	],
	backend: [
		{ name: 'Node.js', icon: '🟢' },
		{ name: 'NestJS', icon: '🪺' },
		{ name: 'Laravel', icon: '🐘' },
		{ name: 'PostgreSQL', icon: '🐘' },
		{ name: 'MongoDB', icon: '🍃' },
		{ name: 'Redis', icon: '🔴' },
	],
	mobile: [
		{ name: 'React Native', icon: '📱' },
		{ name: 'Expo', icon: '⚡' },
		{ name: 'TypeScript', icon: '🔷' },
		{ name: 'NativeWind', icon: '🌪️' },
		{ name: 'React Navigation', icon: '🧭' },
		{ name: 'AsyncStorage', icon: '💾' },
	],
	tools: [
		{ name: 'Git', icon: '📝' },
		{ name: 'Docker', icon: '🐳' },
		{ name: 'AWS', icon: '☁️' },
		{ name: 'Vercel', icon: '▲' },
		{ name: 'Figma', icon: '🎨' },
		{ name: 'VS Code', icon: '💻' },
	],
};

export function TechStackSection() {
	const t = useTranslations('TechStack');

	return (
		<section id="tech" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center space-y-8 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground">
						{t('title')}
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{Object.entries(techStack).map(([category, technologies]) => (
						<div
							key={category}
							className="bg-background rounded-lg p-6 shadow-sm border border-border"
						>
							<h3 className="text-xl font-semibold text-foreground mb-4 text-center">
								{t(category as keyof typeof t)}
							</h3>
							<div className="space-y-3">
								{technologies.map(tech => (
									<div
										key={tech.name}
										className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors"
									>
										<span className="text-2xl">{tech.icon}</span>
										<span className="text-sm font-medium text-foreground">
											{tech.name}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

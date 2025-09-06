import { useTranslations } from 'next-intl';

const experiences = [
	{
		title: 'Senior Full Stack Developer',
		company: 'Tech Company',
		location: 'Remote',
		period: '2022 - Present',
		current: true,
		description:
			'Leading development of scalable web and mobile applications using React, React Native, Node.js, and modern cloud technologies.',
		technologies: [
			'React',
			'React Native',
			'Node.js',
			'TypeScript',
			'AWS',
			'PostgreSQL',
		],
	},
	{
		title: 'Full Stack Developer',
		company: 'Startup Inc',
		location: 'São Paulo, Brazil',
		period: '2020 - 2022',
		current: false,
		description:
			'Developed and maintained web applications using React, Laravel, and MySQL. Collaborated with cross-functional teams to deliver high-quality software solutions.',
		technologies: ['React', 'Laravel', 'MySQL', 'JavaScript', 'Docker'],
	},
	{
		title: 'Frontend Developer',
		company: 'Digital Agency',
		location: 'São Paulo, Brazil',
		period: '2019 - 2020',
		current: false,
		description:
			'Created responsive and interactive web interfaces using modern frontend technologies. Focused on user experience and performance optimization.',
		technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'HTML5'],
	},
];

export function ExperienceSection() {
	const t = useTranslations('Experience');

	return (
		<section id="experience" className="py-20 px-4">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center space-y-8 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground">
						{t('title')}
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
				</div>

				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="relative bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
						>
							{exp.current && (
								<div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
									{t('current')}
								</div>
							)}
							<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
								<div>
									<h3 className="text-xl font-semibold text-foreground">
										{exp.title}
									</h3>
									<p className="text-primary font-medium">{exp.company}</p>
									<p className="text-sm text-muted-foreground">
										{exp.location} • {exp.period}
									</p>
								</div>
							</div>
							<p className="text-muted-foreground mb-4 leading-relaxed">
								{exp.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{exp.technologies.map(tech => (
									<span
										key={tech}
										className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

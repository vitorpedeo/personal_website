import { useTranslations } from 'next-intl';

const education = [
	{
		degree: 'Bachelor of Computer Science',
		university: 'University of São Paulo',
		location: 'São Paulo, Brazil',
		period: '2016 - 2020',
		description:
			'Focused on software engineering, algorithms, data structures, and computer science fundamentals.',
	},
	{
		degree: 'Full Stack Web Development Bootcamp',
		school: 'Rocketseat',
		location: 'Online',
		period: '2019',
		description:
			'Intensive program covering modern web development technologies including React, Node.js, and mobile development.',
	},
	{
		degree: 'React Native Specialization',
		school: 'Alura',
		location: 'Online',
		period: '2020',
		description:
			'Advanced course on mobile development with React Native, covering navigation, state management, and native modules.',
	},
];

export function EducationSection() {
	const t = useTranslations('Education');

	return (
		<section id="education" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center space-y-8 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground">
						{t('title')}
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
				</div>

				<div className="space-y-8">
					{education.map((edu, index) => (
						<div
							key={index}
							className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
						>
							<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
								<div>
									<h3 className="text-xl font-semibold text-foreground">
										{edu.degree}
									</h3>
									<p className="text-primary font-medium">
										{edu.university || edu.school}
									</p>
									<p className="text-sm text-muted-foreground">
										{edu.location} • {edu.period}
									</p>
								</div>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								{edu.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

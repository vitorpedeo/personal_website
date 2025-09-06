import { Calendar, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

// Mock blog posts data - in a real app, this would come from a CMS or API
const blogPosts = [
	{
		id: 1,
		title: 'Building Modern Web Applications with Next.js 15',
		excerpt:
			'Explore the latest features in Next.js 15 and how they can improve your development workflow and application performance.',
		date: '2024-01-15',
		readTime: '5 min read',
		slug: 'building-modern-web-applications-nextjs-15',
	},
	{
		id: 2,
		title: 'React Native Performance Optimization Tips',
		excerpt:
			'Learn essential techniques to optimize your React Native applications for better performance and user experience.',
		date: '2024-01-10',
		readTime: '7 min read',
		slug: 'react-native-performance-optimization-tips',
	},
	{
		id: 3,
		title: 'TypeScript Best Practices for Large Applications',
		excerpt:
			'Discover advanced TypeScript patterns and best practices that will help you build more maintainable applications.',
		date: '2024-01-05',
		readTime: '6 min read',
		slug: 'typescript-best-practices-large-applications',
	},
];

export function BlogSection() {
	const t = useTranslations('Blog');

	return (
		<section id="blog" className="py-20 px-4">
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

				{blogPosts.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map(post => (
							<article
								key={post.id}
								className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow group"
							>
								<div className="space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
											{post.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
											{post.excerpt}
										</p>
									</div>

									<div className="flex items-center justify-between text-sm text-muted-foreground">
										<div className="flex items-center space-x-4">
											<div className="flex items-center space-x-1">
												<Calendar className="h-4 w-4" />
												<span>{post.date}</span>
											</div>
											<div className="flex items-center space-x-1">
												<Clock className="h-4 w-4" />
												<span>{post.readTime}</span>
											</div>
										</div>
									</div>

									<Button
										variant="outline"
										size="sm"
										className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
									>
										{t('readMore')}
									</Button>
								</div>
							</article>
						))}
					</div>
				) : (
					<div className="text-center py-12">
						<p className="text-muted-foreground text-lg">{t('noPosts')}</p>
					</div>
				)}
			</div>
		</section>
	);
}

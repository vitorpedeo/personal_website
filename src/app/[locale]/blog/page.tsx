import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { BlogPost } from '@/components/blog/blog-post';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('blog');

	return {
		title: `vitorpedeo.dev | ${t('title')}`,
		description: t('description'),
	};
}

export default function AboutMe() {
	const t = useTranslations();

	return (
		<div className="flex flex-col gap-12 items-start">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold">{t('blog.title')}</h1>
				<p className="text-body leading-7">{t('blog.description')}</p>
			</div>

			<div className="w-full grid gap-8">
				{Array.from({ length: 4 }).map((_, index) => (
					<BlogPost key={index} />
				))}
			</div>
		</div>
	);
}

import { PortableText } from '@portabletext/react';
import { CalendarDays, Timer } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { fetchPostBySlug } from '@/actions';
import { getLocale } from '@/utils';

type IPageProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params,
}: IPageProps): Promise<Metadata> {
	const post = await fetchPostBySlug(params.slug);

	const title = `vitorpedeo.dev | ${post.title}`;
	const description = post.excerpt;

	return {
		title,
		description,
	};
}

export default async function BlogPost({ params }: IPageProps) {
	const t = await getTranslations('blog');
	const locale = getLocale();

	const post = await fetchPostBySlug(params.slug);

	return (
		<div className="flex flex-col gap-8">
			<div className="w-full h-80 relative">
				<Image
					src={post.image}
					alt="Imagem do post"
					className="rounded-2xl object-cover"
					sizes="(max-width: 1200px) 100vw"
					fill
					priority
				/>
			</div>

			<div className="flex flex-col gap-6">
				<h1 className="text-3xl md:text-5xl font-bold leading-[48px] md:leading-[72px]">
					{post.title}
				</h1>
				<div className="flex gap-6">
					<div className="text-body flex gap-2">
						<CalendarDays size="16px" />
						<time className="text-xs">
							{new Date(post.publishedAt).toLocaleDateString(locale, {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</time>
					</div>
					<div className="text-body flex gap-2">
						<Timer size="16px" />
						<time className="text-xs">
							{post.readingTime}{' '}
							{post.readingTime === 1
								? t('readingTime.singular')
								: t('readingTime.plural')}
						</time>
					</div>
				</div>
				<div className="mt-auto w-full flex flex-wrap gap-2">
					{post.tags.map(tag => (
						<p
							key={tag}
							className="py-1.5 px-6 rounded bg-highlight/50 text-highlight text-xs font-medium"
						>
							{tag}
						</p>
					))}
				</div>
			</div>

			<div className="max-w-full text-justify prose prose-slate dark:prose-invert">
				<PortableText value={post.content} />
			</div>
		</div>
	);
}

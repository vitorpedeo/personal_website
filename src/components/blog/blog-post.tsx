import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { IBlogPost } from '@/types';

type IBlogPostProps = {
	blogPost: IBlogPost;
};

export function BlogPost({ blogPost }: IBlogPostProps) {
	const t = useTranslations('blog');

	return (
		<Link href={`blog/${blogPost.slug}`}>
			<article className="w-full rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
				<div className="w-full md:w-80 h-48 relative">
					<Image
						src={blogPost.image}
						alt="Imagem do post"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
						fill
						priority
					/>
				</div>

				<div className="pt-4 px-6 pb-6 w-full bg-accent flex flex-col gap-3">
					<div className="w-full flex flex-col gap-1">
						<p className="text-lg font-medium leading-7">{blogPost.title}</p>
						<p className="text-body text-xs">
							{blogPost.readingTime}{' '}
							{blogPost.readingTime === 1
								? t('readingTime.singular')
								: t('readingTime.plural')}
						</p>
					</div>

					<p className="text-body text-base">{blogPost.excerpt}</p>

					<div className="mt-auto w-full flex flex-wrap gap-2">
						{blogPost.tags.map(tag => (
							<p
								key={tag}
								className="py-1.5 px-6 rounded bg-highlight/50 text-highlight text-xs font-medium"
							>
								{tag}
							</p>
						))}
					</div>
				</div>
			</article>
		</Link>
	);
}

import type { MDXComponents } from 'mdx/types';

import { cn } from '@/lib/utils';

const components: MDXComponents = {
	a: props => (
		<a
			{...props}
			className={cn(
				'font-medium text-foreground underline underline-offset-4',
				props.className
			)}
		/>
	),
	img: props => (
		// biome-ignore lint/performance/noImgElement: there is no need to use the Image component here
		<img
			{...props}
			alt={props.alt ?? ''}
			loading="lazy"
			decoding="async"
			className={cn(
				'rounded-xl border border-border shadow-sm',
				props.className
			)}
		/>
	),
};

export function useMDXComponents(): MDXComponents {
	return components;
}

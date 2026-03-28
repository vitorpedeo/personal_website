import type { MDXComponents } from 'mdx/types';

import { cn } from '@/lib/utils';

/* eslint-disable @next/next/no-img-element */

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

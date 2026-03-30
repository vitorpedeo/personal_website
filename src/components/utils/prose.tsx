import type * as React from 'react';

import { cn } from '@/lib/utils';

export function Prose({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'prose max-w-none text-foreground prose-zinc dark:prose-invert',
				'prose-headings:font-sans prose-headings:font-semibold prose-headings:text-foreground',
				'prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground',
				'prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4',
				'prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-sm',
				'prose-hr:border-border',
				className
			)}
			{...props}
		/>
	);
}

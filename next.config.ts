import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = createMDX({
	options: {
		rehypePlugins: [
			[
				'rehype-pretty-code',
				{
					defaultLang: {
						block: 'plaintext',
					},
					keepBackground: false,
					theme: {
						dark: 'github-dark-dimmed',
						light: 'github-light',
					},
				},
			],
		],
	},
});
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withNextIntl(withMDX(nextConfig));

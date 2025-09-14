import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = createMDX();

export default withNextIntl(withMDX(nextConfig));

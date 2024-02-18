import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placehold.co',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
			},
		],
	},
};

export default withNextIntl(nextConfig);

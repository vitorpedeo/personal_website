import sanityUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_PROJECT_DATASET,
	apiVersion: process.env.SANITY_PROJECT_API_VERSION,
	useCdn: false,
});

export const imageBuilder = sanityUrlBuilder(sanityClient);

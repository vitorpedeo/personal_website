import { useQuery } from 'react-query';

import { setupApiClient } from '@/modules/common/services/api';
import { PostAPIPayload, SlugsAPIPayload } from '@/modules/Post/types';
import { getStrapiMedia } from '@/modules/common/services/strapi';

export async function getPost(slug: string) {
  const api = setupApiClient();

  const { data } = await api.get<PostAPIPayload>(
    `/posts?populate=*&slug=${slug}`,
  );
  const post = data.data[0];

  const formattedPost = {
    id: post.id,
    slug: post.attributes.slug,
    title: post.attributes.title,
    description: post.attributes.description,
    read_time: post.attributes.read_time,
    publishedAt: post.attributes.publishedAt,
    content: post.attributes.content,
    image_url: getStrapiMedia(post.attributes.banner.data.attributes.url),
    image_alt: post.attributes.banner.data.attributes.alternativeText,
    tags: post.attributes.tags.data.map(tag => ({
      id: tag.id,
      name: tag.attributes.name,
      slug: tag.attributes.slug,
    })),
  };

  return formattedPost;
}

export async function getSlugs() {
  const api = setupApiClient();

  const { data } = await api.get<SlugsAPIPayload>('/posts?fields=slug');

  const formattedSlugs = data.data.map(post => post.attributes.slug);

  return formattedSlugs;
}

function usePost(slug: string) {
  const query = useQuery(['post', slug], () => getPost(slug), {
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    refetchOnWindowFocus: false,
  });

  return query;
}

export default usePost;

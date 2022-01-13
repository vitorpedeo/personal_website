import { useQuery } from 'react-query';

import { setupApiClient } from '@/modules/common/services/api';
import { getStrapiMedia } from '@/modules/common/services/strapi';
import { LatestPostAPIPayload } from '@/modules/Home/types';

export async function getLatestPostRequest() {
  const api = setupApiClient();

  const { data } = await api.get<LatestPostAPIPayload>(
    '/posts/findLast?populate=*&fields=slug,title,description,read_time&sort=publishedAt:desc',
  );

  const formattedPost = {
    id: data.data.id,
    slug: data.data.attributes.slug,
    title: data.data.attributes.title,
    description: data.data.attributes.description,
    read_time: data.data.attributes.read_time,
    image_url: getStrapiMedia(
      data.data.attributes.banner.data.attributes.formats.small.url,
    ),
    image_alt: data.data.attributes.banner.data.attributes.alternativeText,
    tags: data.data.attributes.tags.data.map(tag => ({
      id: tag.id,
      name: tag.attributes.name,
    })),
  };

  return formattedPost;
}

function useLatestPost() {
  const query = useQuery('latestPost', getLatestPostRequest, {
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    refetchOnWindowFocus: false,
  });

  return query;
}

export default useLatestPost;

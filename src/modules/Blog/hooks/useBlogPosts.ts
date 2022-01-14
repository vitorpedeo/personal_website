import { useQuery } from 'react-query';

import { setupApiClient } from '@/modules/common/services/api';
import { getStrapiMedia } from '@/modules/common/services/strapi';
import { PostsAPIPayload } from '@/modules/Blog/types';

export async function getBlogPostsRequest() {
  const api = setupApiClient();

  const { data } = await api.get<PostsAPIPayload>(
    '/posts?populate=*&fields=slug,title,description,read_time&sort=publishedAt:desc',
  );

  const formattedPosts = data.data.map(post => ({
    id: post.id,
    slug: post.attributes.slug,
    title: post.attributes.title,
    description: post.attributes.description,
    read_time: post.attributes.read_time,
    image_url: getStrapiMedia(
      post.attributes.banner.data.attributes.formats.medium.url,
    ),
    image_alt: post.attributes.banner.data.attributes.alternativeText,
    tags: post.attributes.tags.data.map(tag => ({
      id: tag.id,
      name: tag.attributes.name,
    })),
  }));

  return formattedPosts;
}

function useBlogPosts() {
  const query = useQuery('posts', getBlogPostsRequest, {
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    refetchOnWindowFocus: false,
  });

  return query;
}

export default useBlogPosts;

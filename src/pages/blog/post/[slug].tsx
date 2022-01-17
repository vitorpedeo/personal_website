import { Box, Container } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

import usePost, {
  getPost,
  getSlugs,
} from '@/modules/Post/hooks/queries/usePost';

import { PostIntro } from '@/modules/Post/components/PostIntro';
import { PostContent } from '@/modules/Post/components/PostContent';

export default function Post() {
  const { query } = useRouter();
  const { slug } = query;

  const { data } = usePost(slug as string);

  return (
    <>
      <Head>
        <title>vitorpedeo | {data?.title || 'Post'}</title>
      </Head>

      <Box w="full" h={[200, 300, 400]} position="relative">
        {data ? (
          <Image
            src={data.image_url}
            alt={data.image_alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        ) : null}
      </Box>

      <Container pt="12" pb="80" maxW={1020}>
        <PostIntro />
        <PostContent />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs();

  const paths = slugs.map(slug => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post', slug], () => getPost(slug));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

import { Box, Container } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import { getAllSlugs, getPostBySlug } from '@/modules/common/lib/posts';

import type { PostProps } from '@/modules/Post/types';

import { PostIntro } from '@/modules/Post/components/PostIntro';
import { PostContent } from '@/modules/Post/components/PostContent';
import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Post({ post }: PostProps) {
  const { frontMatter, markdown } = post;

  return (
    <PageWithSeo title={frontMatter.title} description={frontMatter.excerpt}>
      <Box w="full" h={[200, 300, 400]} position="relative">
        <Image
          src={`/images/posts/${frontMatter.slug}/banner.jpg`}
          alt={`${frontMatter.title} Banner`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </Box>

      <Container pt="12" pb="80" maxW={1020}>
        <PostIntro meta={frontMatter} content={markdown} />
        <PostContent content={markdown} />
      </Container>
    </PageWithSeo>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs({ removeExtension: true });

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

  const post = getPostBySlug({ slug });

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

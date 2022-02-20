import { Box, Container } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import { getAllSlugs, getPostBySlug } from '@/modules/common/lib/posts';

import type { Locale } from '@/modules/common/types';
import type { PostProps } from '@/modules/Post/types';

import { PostIntro } from '@/modules/Post/components/PostIntro';
import { PostContent } from '@/modules/Post/components/PostContent';
import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Post({ post }: PostProps) {
  const {
    banner,
    slug,
    title,
    excerpt,
    createdAt,
    tags,
    readingTime,
    content,
  } = post;

  const meta = {
    slug,
    title,
    excerpt,
    createdAt,
    tags,
    readingTime,
  };

  return (
    <PageWithSeo title={title} description={excerpt}>
      <Box w="full" h={[200, 300, 400]} position="relative">
        <Image
          src={banner}
          alt={`${title} Banner`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </Box>

      <Container pt="12" pb="80" maxW={1020}>
        <PostIntro meta={meta} />
        <PostContent content={content} />
      </Container>
    </PageWithSeo>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();

  const paths = [] as { params: { slug: string }; locale: string }[];

  slugs.forEach(slug => {
    const ptBR = {
      params: { slug },
      locale: 'pt-BR',
    };
    paths.push(ptBR);

    const enUS = {
      params: { slug },
      locale: 'en-US',
    };
    paths.push(enUS);
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params as { slug: string };
  const locale = ctx.locale as Locale;

  const post = await getPostBySlug({ slug, locale });

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

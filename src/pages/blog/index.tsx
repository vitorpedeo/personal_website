import { Container, Grid, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { getAllPosts } from '@/modules/common/lib/posts';

import type { BlogProps } from '@/modules/Blog/types';

import { BlogPostCard } from '@/modules/Blog/components/BlogPostCard';
import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Blog({ posts }: BlogProps) {
  return (
    <PageWithSeo
      title="vitorpedeo | Blog"
      description="These are all my blog posts"
    >
      <Container pt="24" pb="64" maxW={1020}>
        <Heading
          fontSize={['3xl', '4xl', '5xl']}
          fontWeight="bold"
          textAlign={['center', 'center', 'left']}
        >
          All posts 📒
        </Heading>

        <Grid my="12" templateColumns="repeat(2, 1fr)" gap="6">
          {posts.map(post => {
            return <BlogPostCard key={post.frontMatter.slug} post={post} />;
          })}
        </Grid>
      </Container>
    </PageWithSeo>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

import { Container, Flex, Grid, Heading, Spinner } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';

import useBlogPosts, {
  getBlogPostsRequest,
} from '@/modules/Blog/hooks/useBlogPosts';

import { BlogPostCard } from '@/modules/Blog/components/BlogPostCard';
import { CustomAlert } from '@/modules/common/components/CustomAlert';

export default function Blog() {
  const { data, isError, isLoading } = useBlogPosts();

  function renderContent() {
    if (isError) {
      return (
        <CustomAlert
          my="12"
          status="error"
          title="Oops, something went wrong 😟"
          description="Could not fetch blog posts"
        />
      );
    }

    if (isLoading) {
      return (
        <Flex my="12" align="center" justify="center">
          <Spinner size="xl" />
        </Flex>
      );
    }

    if (!data) {
      return null;
    }

    return (
      <Grid my="12" templateColumns="repeat(2, 1fr)" gap="6">
        {data.map(post => {
          return <BlogPostCard key={post.id} post={post} />;
        })}
      </Grid>
    );
  }

  return (
    <>
      <Head>
        <title>vitorpedeo | Blog</title>
      </Head>

      <Container pt="24" pb="64" maxW={1020}>
        <Heading
          fontSize={['3xl', '4xl', '5xl']}
          fontWeight="bold"
          textAlign={['center', 'center', 'left']}
        >
          All posts 📒
        </Heading>

        {renderContent()}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', getBlogPostsRequest);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

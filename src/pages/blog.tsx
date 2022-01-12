import { Container, Grid, Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { BlogPostCard } from '@/modules/Blog/components/BlogPostCard';

const arr = Array.from(Array(4).keys());

export default function Blog() {
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

        <Grid my="12" templateColumns="repeat(2, 1fr)" gap="6">
          {arr.map((item, index) => {
            // Items with index divisible by 3 should span
            const shouldSpan = (index + 3) % 3 === 0;

            return <BlogPostCard key={item} shouldSpan={shouldSpan} />;
          })}
        </Grid>
      </Container>
    </>
  );
}

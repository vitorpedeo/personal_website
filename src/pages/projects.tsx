import { Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { Project } from '@/modules/Projects/components/Project';

export default function Projects() {
  return (
    <>
      <Head>
        <title>vitorpedeo | Projects</title>
      </Head>

      <Container pt="24" pb="64" maxW={1020}>
        <Heading
          fontSize={['3xl', '4xl', '5xl']}
          fontWeight="bold"
          textAlign={['center', 'center', 'left']}
        >
          My projects 🚀
        </Heading>

        <Text
          mt="6"
          mb="12"
          fontSize={['md', 'lg']}
          textAlign={['center', 'center', 'left']}
          lineHeight="6"
        >
          Here’s a collection of interesting projects that I built during my
          studies.
        </Text>

        <Project />
        <Project />
        <Project />
      </Container>
    </>
  );
}

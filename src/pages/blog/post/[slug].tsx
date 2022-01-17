import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

import { PostIntro } from '@/modules/Post/components/PostIntro';
import { PostContent } from '@/modules/Post/components/PostContent';

export default function Post() {
  return (
    <>
      <Head>
        <title>vitorpedeo | Post</title>
      </Head>

      <Box w="full" h={[200, 300, 400]} position="relative">
        <Image
          src="/images/code.jpg"
          alt="Code"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Container pt="12" pb="64" maxW={1020}>
        <PostIntro />
        <PostContent
          content={
            "# Test\n\nYet **another developer blog** [test](https://www.test.com.br). Yes, I know that internet is floodered with blogs of this nature, and when I was thinkering it, I still didn't have a real motivation to build it. However, after finishing it, I discovered that I really need a way to register my evolution on the tech world. So, this blog has one big objective: **record my progress**.\n\nApart from the big objective, I want my blog to **help other people too**. Maybe the problem I solved today could be someone else's trouble tomorrow.\n\nI'm really motivated to continue my blog, and I hope that you enjoy my future posts. See you!\n\n# Test\n\n- Item 1\n\n- Item 1\n\nTeste 123\n\n# Heading 1\n\n## Heading 2\n\n### Heading 3\n\n#### Heading 4\n\n##### Heading 5\n\n###### Heading 6"
          }
        />
      </Container>
    </>
  );
}

import {
  Box,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useMemo } from 'react';

import type { LatestBlogPostSectionProps } from '@/modules/Home/types';

export function LatestBlogPostSection({
  latestPost,
}: LatestBlogPostSectionProps) {
  const { frontMatter, markdown } = latestPost;

  const readTime = useMemo(() => {
    const postContentWithoutSpecialCharacters = markdown.replace(
      /[^a-zA-Z0-9 ]/g,
      '',
    );
    const postContentTotalWords =
      postContentWithoutSpecialCharacters.split(' ').length;
    const wordsPerMinute = 250;

    return `${Math.ceil(postContentTotalWords / wordsPerMinute)} min read`;
  }, [markdown]);

  const latestPostCardBgColor = useColorModeValue('white', 'accent.dark');

  return (
    <Box as="section" id="latest-blog-post" pb="24">
      <Heading size="xl" textAlign={['center', 'center', 'left']}>
        Latest blog post
      </Heading>

      <Text
        my="6"
        fontSize="lg"
        lineHeight="6"
        textAlign={['center', 'center', 'left']}
      >
        This is the latest post that I made in my personal blog. Go check it
        out!
      </Text>

      <Flex direction="column" align="center" justify="center">
        <LinkBox
          as="article"
          maxW={[300, 360]}
          w="full"
          borderRadius={8}
          background={latestPostCardBgColor}
          boxShadow="md"
          overflow="hidden"
          transition="transform 0.3s ease-in-out"
          _hover={{
            textDecoration: 'none',
            transform: 'scale(1.02)',
          }}
        >
          <Box position="relative" w="full" h={150}>
            <Image
              src={`/images/posts/${frontMatter.slug}/banner.jpg`}
              alt={`${frontMatter.title} Thumbnail`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>

          <Box p="6">
            <NextLink href={`/blog/post/${frontMatter.slug}`} passHref>
              <LinkOverlay>
                <Heading size="md" fontWeight="700" lineHeight="7">
                  {frontMatter.title}
                </Heading>
              </LinkOverlay>
            </NextLink>

            <Text my="2" fontSize="sm" lineHeight="6">
              {readTime}
            </Text>

            <Text fontSize="lg" lineHeight="6">
              {frontMatter.excerpt}
            </Text>
          </Box>
        </LinkBox>

        <NextLink href="/blog" passHref>
          <Link
            mt="6"
            py="3"
            px="4"
            borderRadius={6}
            fontSize="lg"
            fontWeight="600"
            transition="filter 0.2s"
            _hover={{
              textDecoration: 'none',
              filter: 'brightness(0.9)',
            }}
          >
            View all posts
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
}

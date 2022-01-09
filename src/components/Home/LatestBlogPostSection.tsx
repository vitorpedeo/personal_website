import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

export function LatestBlogPostSection() {
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
        <NextLink href="/latest-post" passHref>
          <Link
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
                src="/images/code.jpg"
                alt="Code"
                layout="fill"
                objectFit="cover"
              />
            </Box>

            <Box p="6">
              <Heading size="md" fontWeight="700" lineHeight="7">
                How I built my own blog with NextJS, ChakraUI and Ghost CMS
              </Heading>

              <Text my="2" fontSize="sm" lineHeight="6">
                15 min read
              </Text>

              <Text fontSize="lg" lineHeight="6">
                In this post I’ll tell all my adventures when building my own
                blog.
              </Text>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/posts" passHref>
          <Link
            mt="6"
            py="3"
            px="4"
            borderRadius={6}
            fontSize={['md', 'lg']}
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

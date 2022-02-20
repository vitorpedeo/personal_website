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
import { useRouter } from 'next/router';

import useTranslation from '@/modules/common/hooks/useTranslation';

import type { LatestBlogPostSectionProps } from '@/modules/Home/types';

export function LatestBlogPostSection({
  latestPost,
}: LatestBlogPostSectionProps) {
  const { locale } = useRouter();

  const translate = useTranslation();

  const readingTime =
    locale === 'en-US'
      ? `${latestPost.readingTime} min read`
      : `${latestPost.readingTime} min de leitura`;

  const latestPostCardBgColor = useColorModeValue('white', 'accent.dark');

  return (
    <Box as="section" id="latest-blog-post" pb="24">
      <Heading size="xl" textAlign={['center', 'center', 'left']}>
        {translate('latestBlogPostTitle')}
      </Heading>

      <Text
        my="6"
        fontSize="lg"
        lineHeight="6"
        textAlign={['center', 'center', 'left']}
      >
        {translate('latestBlogPostDescription')}
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
              src={latestPost.banner}
              alt={`${latestPost.title} Thumbnail`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>

          <Box p="6">
            <NextLink href={`/blog/post/${latestPost.slug}`} passHref>
              <LinkOverlay>
                <Heading size="md" fontWeight="700" lineHeight="7">
                  {latestPost.title}
                </Heading>
              </LinkOverlay>
            </NextLink>

            <Text my="2" fontSize="sm" lineHeight="6">
              {readingTime}
            </Text>

            <Text fontSize="lg" lineHeight="6">
              {latestPost.excerpt}
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
            {translate('viewAllPostsLinkLabel')}
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
}

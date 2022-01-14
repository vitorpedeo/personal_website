import {
  Box,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

import useLatestPost from '@/modules/Home/hooks/queries/useLatestPost';

import { CustomAlert } from '@/modules/common/components/CustomAlert';

export function LatestBlogPostSection() {
  const { data, isError, isLoading } = useLatestPost();

  const latestPostCardBgColor = useColorModeValue('white', 'accent.dark');

  function renderContent() {
    if (isError) {
      return (
        <CustomAlert
          status="error"
          title="Oops, something went wrong 😟"
          description="Could not fetch latest post. Please, try again later"
        />
      );
    }

    if (isLoading) {
      return <Skeleton maxW={360} w="full" h={314} borderRadius={8} />;
    }

    if (!data) {
      return null;
    }

    return (
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
            src={data.image_url}
            alt={data.image_alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>

        <Box p="6">
          <NextLink href={`/blog/post/${data.slug}`} passHref>
            <LinkOverlay>
              <Heading size="md" fontWeight="700" lineHeight="7">
                {data.title}
              </Heading>
            </LinkOverlay>
          </NextLink>

          <Text my="2" fontSize="sm" lineHeight="6">
            {data.read_time}
          </Text>

          <Text fontSize="lg" lineHeight="6">
            {data.description}
          </Text>
        </Box>
      </LinkBox>
    );
  }

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
        {renderContent()}

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

import {
  Box,
  Flex,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useMemo } from 'react';

import type { BlogPostCardProps } from '@/modules/Blog/types';

import { Tag } from './Tag';

export function BlogPostCard({ post }: BlogPostCardProps) {
  const { frontMatter, markdown } = post;

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

  const bgColor = useColorModeValue('white', 'accent.dark');

  return (
    <LinkBox
      as={GridItem}
      colSpan={[2, 2]}
      w="full"
      minH={240}
      borderRadius={12}
      background={bgColor}
      boxShadow="md"
      overflow="hidden"
      transition="transform 0.2s ease-in-out"
      display="flex"
      flexDirection={['column', 'row']}
      _hover={{
        transform: 'scale(1.02)',
      }}
      sx={{
        '@media screen and (min-width: 768px)': {
          'div:first-of-type': {
            width: 430,
          },

          '&:not(:nth-of-type(3n + 1))': {
            gridColumn: 'span 1/span 1',
            flexDirection: 'column',

            'div:first-of-type': {
              width: '100%',
            },
          },
        },
      }}
    >
      <Box w={['100%', 240]} h={[240]} position="relative">
        <Image
          src={`/images/posts/${frontMatter.slug}/banner.jpg`}
          alt={`${frontMatter.title} Thumbnail`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>

      <Flex p="6" direction="column">
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

        <Text mb="4" fontSize="lg" lineHeight="6">
          {frontMatter.excerpt}
        </Text>

        <Flex mt="auto" gap="4" wrap="wrap">
          {frontMatter.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Flex>
      </Flex>
    </LinkBox>
  );
}

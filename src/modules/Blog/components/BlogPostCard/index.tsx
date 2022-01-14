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

import { Tag } from './Tag';

type Post = {
  slug: string;
  title: string;
  description: string;
  read_time: string;
  image_url: string;
  image_alt: string;
  tags: {
    id: number;
    name: string;
  }[];
};

interface BlogPostCardProps {
  post: Post;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
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
          src={post.image_url}
          alt={post.image_alt}
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>

      <Flex p="6" direction="column">
        <NextLink href={`/blog/post/${post.slug}`} passHref>
          <LinkOverlay>
            <Heading size="md" fontWeight="700" lineHeight="7">
              {post.title}
            </Heading>
          </LinkOverlay>
        </NextLink>

        <Text my="2" fontSize="sm" lineHeight="6">
          {post.read_time}
        </Text>

        <Text mb="4" fontSize="lg" lineHeight="6">
          {post.description}
        </Text>

        <Flex mt="auto" gap="4" wrap="wrap">
          {post.tags.map(tag => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </Flex>
      </Flex>
    </LinkBox>
  );
}

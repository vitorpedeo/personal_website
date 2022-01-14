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
  shouldSpan: boolean;
}

export function BlogPostCard({ post, shouldSpan }: BlogPostCardProps) {
  const bgColor = useColorModeValue('white', 'accent.dark');

  const colSpan = shouldSpan ? 2 : 1;
  const cardFlexDirection = shouldSpan ? 'row' : 'column';
  const cardImageWidth = shouldSpan ? '430px' : '100%';
  const cardImageHeight = shouldSpan ? '100%' : '240px';

  return (
    <LinkBox
      as={GridItem}
      colSpan={[2, 2, colSpan]}
      w="full"
      minH={240}
      borderRadius={12}
      background={bgColor}
      boxShadow="md"
      overflow="hidden"
      transition="transform 0.2s ease-in-out"
      display="flex"
      flexDirection={['column', 'row', cardFlexDirection]}
      _hover={{
        transform: 'scale(1.02)',
      }}
    >
      <Box
        w={['100%', 240, cardImageWidth]}
        h={[240, cardImageHeight]}
        position="relative"
      >
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

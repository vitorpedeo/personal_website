import {
  Box,
  Flex,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from './Tag';

interface BlogPostCardProps {
  shouldSpan: boolean;
}

export function BlogPostCard({ shouldSpan }: BlogPostCardProps) {
  const bgColor = useColorModeValue('white', 'accent.dark');

  const colSpan = shouldSpan ? 2 : 1;
  const cardFlexDirection = shouldSpan ? 'row' : 'column';
  const cardImageWidth = shouldSpan ? '430px' : '100%';
  const cardImageHeight = shouldSpan ? '100%' : '240px';

  return (
    <Link href="/" passHref>
      <GridItem
        as="a"
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
            src="/images/code.jpg"
            alt="Code"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <Flex p="6" direction="column">
          <Heading size="md" fontWeight="700" lineHeight="7">
            How I built my own blog with NextJS, ChakraUI and Ghost CMS
          </Heading>

          <Text my="2" fontSize="sm" lineHeight="6">
            15 min read
          </Text>

          <Text mb="4" fontSize="lg" lineHeight="6">
            In this post I’ll tell all my adventures when building my own blog.
          </Text>

          <Flex mt="auto" gap="4" wrap="wrap">
            <Tag />
            <Tag />
            <Tag />
          </Flex>
        </Flex>
      </GridItem>
    </Link>
  );
}

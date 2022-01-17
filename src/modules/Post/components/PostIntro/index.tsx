import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoAlarm, IoCalendar } from 'react-icons/io5';

import usePost from '@/modules/Post/hooks/queries/usePost';

import { Tag } from './Tag';

export function PostIntro() {
  const { query } = useRouter();
  const { slug } = query;

  const { data } = usePost(slug as string);

  if (!data) {
    return null;
  }

  const formattedPublicationDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(data.publishedAt));

  return (
    <>
      <Heading
        fontSize={['3xl', '4xl', '5xl']}
        fontWeight="bold"
        textAlign={['center', 'center', 'left']}
      >
        {data.title}
      </Heading>

      <HStack
        spacing="5"
        my="6"
        align="center"
        justify={['center', 'center', 'flex-start']}
      >
        <HStack spacing="2">
          <IoCalendar size={22} />
          <Text as="time" fontSize="sm">
            {formattedPublicationDate}
          </Text>
        </HStack>
        <HStack spacing="2">
          <IoAlarm size={22} />
          <Text as="time" fontSize="sm">
            {data.read_time}
          </Text>
        </HStack>
      </HStack>

      <Flex gap="4" wrap="wrap">
        {data.tags.map(tag => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </Flex>
    </>
  );
}

import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IoAlarm, IoCalendar } from 'react-icons/io5';

import type { PostIntroProps } from '@/modules/Post/types';

import { Tag } from './Tag';

export function PostIntro({ meta, content }: PostIntroProps) {
  const { locale } = useRouter();

  const formattedPublicationDate = format(
    parseISO(meta.publishedAt),
    'dd MMMM yyyy',
    {
      locale: locale === 'en-US' ? enUS : ptBR,
    },
  );

  const readTime = useMemo(() => {
    const postContentWithoutSpecialCharacters = content.replace(
      /[^a-zA-Z0-9 ]/g,
      '',
    );
    const postContentTotalWords =
      postContentWithoutSpecialCharacters.split(' ').length;
    const wordsPerMinute = 250;

    return `${Math.ceil(postContentTotalWords / wordsPerMinute)} ${
      locale === 'en-US' ? 'min read' : 'min de leitura'
    }`;
  }, [content, locale]);

  return (
    <>
      <Heading
        fontSize={['3xl', '4xl', '5xl']}
        fontWeight="bold"
        textAlign={['center', 'center', 'left']}
      >
        {meta.title}
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
            {readTime}
          </Text>
        </HStack>
      </HStack>

      <Flex
        gap="4"
        wrap="wrap"
        align="center"
        justify={['center', 'center', 'flex-start']}
      >
        {meta.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Flex>
    </>
  );
}

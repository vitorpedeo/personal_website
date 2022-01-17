import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { IoAlarm, IoCalendar } from 'react-icons/io5';
import { Tag } from './Tag';

export function PostIntro() {
  return (
    <>
      <Heading
        fontSize={['3xl', '4xl', '5xl']}
        fontWeight="bold"
        textAlign={['center', 'center', 'left']}
      >
        How I built my own blog with NextJS, ChakraUI and Ghost CMS
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
            06 January 2022
          </Text>
        </HStack>
        <HStack spacing="2">
          <IoAlarm size={22} />
          <Text as="time" fontSize="sm">
            15 min read
          </Text>
        </HStack>
      </HStack>

      <Flex gap="4" wrap="wrap">
        <Tag>React</Tag>
        <Tag>Netx.js</Tag>
      </Flex>
    </>
  );
}

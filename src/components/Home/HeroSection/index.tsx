import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { IoBriefcase, IoPhonePortraitOutline } from 'react-icons/io5';

import { SectionLink } from './SectionLink';

export function HeroSection() {
  return (
    <Flex as="section" py="24" direction="column" align="center">
      <Heading
        fontSize={['3xl', '4xl', '5xl']}
        fontWeight="bold"
        textAlign="center"
        letterSpacing={1}
      >
        Hi there! I’m Vitor 😀️
      </Heading>

      <Text
        my="6"
        maxW={815}
        fontSize={['md', 'lg']}
        textAlign="center"
        lineHeight="6"
      >
        I develop websites and, sometimes, I like to write about my work and
        studies. As you’re visiting my website, feel free to enjoy all of its
        content!
      </Text>

      <HStack spacing="6" w="full" align="center" justify="center">
        <SectionLink title="Experience" icon={IoBriefcase} />
        <SectionLink title="Contacts" icon={IoPhonePortraitOutline} />
      </HStack>
    </Flex>
  );
}

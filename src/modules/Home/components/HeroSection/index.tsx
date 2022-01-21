import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { IoBriefcase, IoPhonePortraitOutline } from 'react-icons/io5';

import useTranslation from '@/modules/common/hooks/useTranslation';

import { SectionLink } from './SectionLink';

export function HeroSection() {
  const translate = useTranslation();

  return (
    <Flex as="section" pb="24" direction="column" align="center">
      <Heading
        fontSize={['3xl', '4xl', '5xl']}
        fontWeight="bold"
        textAlign="center"
        letterSpacing={1}
      >
        {`${translate('greeting')} 😀️`}
      </Heading>

      <Text
        my="6"
        maxW={815}
        fontSize={['md', 'lg']}
        textAlign="center"
        lineHeight="6"
      >
        {translate('intro')}
      </Text>

      <HStack spacing="6" w="full" align="center" justify="center">
        <SectionLink title="Experience" icon={IoBriefcase} />
        <SectionLink title="Contacts" icon={IoPhonePortraitOutline} />
      </HStack>
    </Flex>
  );
}

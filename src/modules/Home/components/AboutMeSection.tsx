import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import useTranslation from '@/modules/common/hooks/useTranslation';

export function AboutMeSection() {
  const translate = useTranslation();

  return (
    <Flex
      as="section"
      id="about-me"
      pb="24"
      direction={['column', 'column', 'row']}
    >
      <Box flex="1">
        <Heading size="xl" textAlign={['center', 'center', 'left']}>
          {translate('aboutMeTitle')}{' '}
          <Text as="span" color="primary.regular">
            {translate('aboutMeTitleEmphasis')}
          </Text>
        </Heading>

        <Text
          mt="6"
          fontSize="lg"
          lineHeight="6"
          textAlign={['center', 'center', 'left']}
        >
          {translate('aboutMeDescription')}
        </Text>
      </Box>
      <Flex
        position="relative"
        justify={['center', 'center', 'flex-end']}
        flex="1"
      >
        <Image
          src="/images/developer.svg"
          alt="Developer"
          width={308}
          height={232}
        />
      </Flex>
    </Flex>
  );
}

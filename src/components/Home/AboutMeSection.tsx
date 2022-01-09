import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

import useIsMobile from '@/hooks/useIsMobile';

export function AboutMeSection() {
  const headingColor = useColorModeValue('heading.light', 'heading.dark');
  const isMobile = useIsMobile();

  return (
    <Flex
      as="section"
      id="about-me"
      pb="24"
      direction={isMobile ? 'column' : 'row'}
    >
      <Box flex="1">
        <Heading
          size="xl"
          color={headingColor}
          textAlign={isMobile ? 'center' : 'left'}
        >
          I’m a developer whose main objective is to{' '}
          <Text as="span" color="primary.regular">
            evolve
          </Text>
        </Heading>

        <Text
          mt="6"
          fontSize="lg"
          lineHeight="6"
          textAlign={isMobile ? 'center' : 'left'}
        >
          I started my journey in the web development world in 2020 and, since
          then, I already knew that I’ll always need to evolve myself, both as a
          person and a professional.
        </Text>
      </Box>
      <Flex
        position="relative"
        justify={isMobile ? 'center' : 'flex-end'}
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

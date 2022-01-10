import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export function AboutMeSection() {
  return (
    <Flex
      as="section"
      id="about-me"
      pb="24"
      direction={['column', 'column', 'row']}
    >
      <Box flex="1">
        <Heading size="xl" textAlign={['center', 'center', 'left']}>
          I’m a developer whose main objective is to{' '}
          <Text as="span" color="primary.regular">
            evolve
          </Text>
        </Heading>

        <Text
          mt="6"
          fontSize="lg"
          lineHeight="6"
          textAlign={['center', 'center', 'left']}
        >
          I started my journey in the web development world in 2020 and, since
          then, I already knew that I’ll always need to evolve myself, both as a
          person and a professional.
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

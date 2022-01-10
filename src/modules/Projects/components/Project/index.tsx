import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { ProjectLink } from './ProjectLink';
import { Tech } from './Tech';

export function Project() {
  return (
    <Box
      as="section"
      w="full"
      sx={{
        '&:not(:last-child)': {
          marginBottom: '3rem',
        },
      }}
    >
      <Box
        w="full"
        h={300}
        borderRadius={20}
        position="relative"
        overflow="hidden"
      >
        <Image
          src="/images/code.jpg"
          alt="Code"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Heading size="lg" mt="6" mb="4" textAlign={['center', 'center', 'left']}>
        Tip Calculator
      </Heading>

      <Text
        fontSize={['md', 'lg']}
        textAlign={['center', 'center', 'left']}
        lineHeight="6"
      >
        Calculator app that distributes the bill and tip among a group of
        people.
      </Text>

      <Flex my="4" gap="4" wrap="wrap" align="center" justify="center">
        <Tech name="HTML" color="#E34B2D" />
        <Tech name="CSS" color="#399CD3" />
        <Tech name="Javascript" color="#F7DE3E" />
      </Flex>

      <Flex gap="4" wrap="wrap" align="center" justify="center">
        <ProjectLink urlType="repo" url="http://github.com/" />
        <ProjectLink urlType="live" url="http://github.com/" />
      </Flex>
    </Box>
  );
}

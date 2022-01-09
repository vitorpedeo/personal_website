import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { useHomeContext } from '@/contexts/HomeContext';

import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  const { experienceSectionRef } = useHomeContext();

  return (
    <Box ref={experienceSectionRef} as="section" id="experience" pb="24">
      <Heading size="xl" textAlign={['center', 'center', 'left']}>
        Experience
      </Heading>

      <Text my="6" fontSize="lg" textAlign={['center', 'center', 'left']}>
        I started my professional journey on September 2020.
      </Text>

      <Flex mb="6" align="center" justify="center">
        <Button
          variant="primary"
          colorScheme="primary"
          size="lg"
          borderRadius={6}
          fontSize="lg"
          fontWeight="600"
          transition="all 0.2s"
          _hover={{
            filter: 'brightness(0.9)',
          }}
        >
          Download resume
        </Button>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing="6">
        <ExperienceCard />
      </SimpleGrid>
    </Box>
  );
}

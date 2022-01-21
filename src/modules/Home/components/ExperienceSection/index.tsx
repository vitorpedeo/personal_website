import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { useHomeContext } from '@/modules/Home/contexts/HomeContext';

import type { ExperienceSectionProps } from '@/modules/Home/types';

import { ExperienceCard } from './ExperienceCard';
import { ResumeDownloadButton } from './ResumeDownloadButton';

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
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
        <ResumeDownloadButton />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing="6">
        {experiences.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

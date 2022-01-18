import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';

import useExperiences from '@/modules/Home/hooks/queries/useExperiences';

import { useHomeContext } from '@/modules/Home/contexts/HomeContext';

import { CustomAlert } from '@/modules/common/components/CustomAlert';
import { ExperienceCard } from './ExperienceCard';
import { ResumeDownloadButton } from './ResumeDownloadButton';

export function ExperienceSection() {
  const { data, isError, isLoading } = useExperiences();

  const { experienceSectionRef } = useHomeContext();

  function renderContent() {
    if (isError) {
      return (
        <CustomAlert
          status="error"
          title="Oops, something went wrong 😟"
          description="Could not fetch experiences. Please, try again later"
        />
      );
    }

    if (isLoading) {
      return <Skeleton h={317} borderRadius={8} />;
    }

    if (!data) {
      return null;
    }

    return (
      <SimpleGrid columns={[1, 2, 3]} spacing="6">
        {data.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </SimpleGrid>
    );
  }

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

      {renderContent()}
    </Box>
  );
}

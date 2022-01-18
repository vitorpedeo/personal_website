import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import { TechNames } from '@/modules/common/types';

import { Tech } from './Tech';

interface ExperienceCardProps {
  experience: {
    company: string;
    role: string;
    work_time: string;
    description: string;
    technologies: {
      name: TechNames;
      color: string;
    }[];
  };
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const bgColor = useColorModeValue('white', 'accent.dark');

  return (
    <Box
      as="article"
      p="6"
      borderRadius={8}
      background={bgColor}
      boxShadow="md"
    >
      <Heading size="md" lineHeight="6">
        {experience.company}
      </Heading>

      <Text my="2" fontSize="lg" lineHeight="6">
        {experience.role}
      </Text>

      <Text fontSize="sm" lineHeight="6">
        {experience.work_time}
      </Text>

      <Text my="4" fontSize="lg" lineHeight="6">
        {experience.description}
      </Text>

      <Flex gap="4" align="center" wrap="wrap">
        {experience.technologies.map(tech => (
          <Tech key={tech.name} name={tech.name} color={tech.color} />
        ))}
      </Flex>
    </Box>
  );
}

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { TechNames } from '@/modules/common/types';

import { ProjectLink } from './ProjectLink';
import { Tech } from './Tech';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    repo_url: string;
    live_url: string;
    image_url: string;
    image_alt: string;
    technologies: {
      name: TechNames;
      color: string;
    }[];
  };
}

export function Project({ project }: ProjectProps) {
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
          src={project.image_url}
          alt={project.image_alt}
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>

      <Heading size="lg" mt="6" mb="4" textAlign={['center', 'center', 'left']}>
        {project.title}
      </Heading>

      <Text
        fontSize={['md', 'lg']}
        textAlign={['center', 'center', 'left']}
        lineHeight="6"
      >
        {project.description}
      </Text>

      <Flex my="4" gap="4" wrap="wrap" align="center" justify="center">
        {project.technologies.map(tech => (
          <Tech key={tech.name} name={tech.name} color={tech.color} />
        ))}
      </Flex>

      <Flex gap="4" wrap="wrap" align="center" justify="center">
        <ProjectLink urlType="repo" url={project.repo_url} />
        <ProjectLink urlType="live" url={project.live_url} />
      </Flex>
    </Box>
  );
}

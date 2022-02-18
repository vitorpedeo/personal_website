import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import type { ProjectProps } from '@/modules/Projects/types';

import { ProjectLink } from './ProjectLink';
import { Tech } from './Tech';

export function Project({ project }: ProjectProps) {
  return (
    <Box as="section" w="full">
      <Box
        w="full"
        h={300}
        borderRadius={20}
        position="relative"
        overflow="hidden"
      >
        <Image
          src={project.image}
          alt={`${project.title} Screenshot`}
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

      <Flex my="6" gap="4" wrap="wrap" align="center" justify="center">
        {project.techs.map(tech => (
          <Tech key={tech} name={tech} />
        ))}
      </Flex>

      <Flex gap="4" wrap="wrap" align="center" justify="center">
        <ProjectLink urlType="repo" url={project.repoUrl} />
        <ProjectLink urlType="live" url={project.liveUrl} />
      </Flex>
    </Box>
  );
}

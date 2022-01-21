import { Container, Heading, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { getProjects } from '@/modules/common/lib/projects';

import type { ProjectsProps } from '@/modules/Projects/types';

import { Project } from '@/modules/Projects/components/Project';
import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Projects({ projects }: ProjectsProps) {
  return (
    <PageWithSeo
      title="vitorpedeo | Projects"
      description="Here's a collection of interesting projects that I built during my
    studies."
    >
      <Container pt="24" pb="64" maxW={1020}>
        <Heading
          fontSize={['3xl', '4xl', '5xl']}
          fontWeight="bold"
          textAlign={['center', 'center', 'left']}
        >
          My projects 🚀
        </Heading>

        <Text
          mt="6"
          mb="12"
          fontSize={['md', 'lg']}
          textAlign={['center', 'center', 'left']}
          lineHeight="6"
        >
          Here&apos;s a collection of interesting projects that I built during
          my studies.
        </Text>

        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </Container>
    </PageWithSeo>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects();

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import useTranslation from '@/modules/common/hooks/useTranslation';
import { getAllProjects } from '@/modules/common/lib/projects';

import type { Locale } from '@/modules/common/types';
import type { ProjectsProps } from '@/modules/Projects/types';

import { Project } from '@/modules/Projects/components/Project';
import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Projects({ projects }: ProjectsProps) {
  const translate = useTranslation();

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
          {`${translate('title')} 🚀`}
        </Heading>

        <Text
          mt="6"
          mb="12"
          fontSize={['md', 'lg']}
          textAlign={['center', 'center', 'left']}
          lineHeight="6"
        >
          {translate('description')}
        </Text>

        <VStack spacing="12" w="full">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </VStack>
      </Container>
    </PageWithSeo>
  );
}

export const getStaticProps: GetStaticProps = async ctx => {
  const locale = ctx.locale as Locale;

  const projects = await getAllProjects({ locale });

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

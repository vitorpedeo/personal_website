import { Container, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';

import useProjects, {
  getProjectsRequest,
} from '@/modules/Projects/hooks/queries/useProjects';

import { Project } from '@/modules/Projects/components/Project';
import { CustomAlert } from '@/modules/common/components/CustomAlert';

export default function Projects() {
  const { data, isError, isLoading } = useProjects();

  function renderContent() {
    if (isError) {
      return (
        <CustomAlert
          status="error"
          title="Oops, something went wrong 😟"
          description="Could not fetch projects. Please, try again later"
        />
      );
    }

    if (isLoading) {
      return (
        <Flex align="center" justify="center">
          <Spinner size="xl" />
        </Flex>
      );
    }

    if (!data) {
      return null;
    }

    return data.map(project => <Project key={project.id} project={project} />);
  }

  return (
    <>
      <Head>
        <title>vitorpedeo | Projects</title>
      </Head>

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
          Here’s a collection of interesting projects that I built during my
          studies.
        </Text>

        {renderContent()}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('projects', getProjectsRequest);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

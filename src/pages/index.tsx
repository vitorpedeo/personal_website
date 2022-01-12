import { Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';

import { getExperiencesRequest } from '@/modules/Home/hooks/queries/useExperiences';

import HomeContextProvider from '@/modules/Home/contexts/HomeContext';

import { HeroSection } from '@/modules/Home/components/HeroSection';
import { AboutMeSection } from '@/modules/Home/components/AboutMeSection';
import { LatestBlogPostSection } from '@/modules/Home/components/LatestBlogPostSection';
import { ContactsSection } from '@/modules/Home/components/ContactsSection';
import { ExperienceSection } from '@/modules/Home/components/ExperienceSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>vitorpedeo | Home</title>
      </Head>

      <Container pt="24" pb="64" maxW={1020}>
        <HomeContextProvider>
          <HeroSection />
          <AboutMeSection />
          <LatestBlogPostSection />
          <ExperienceSection />
          <ContactsSection />
        </HomeContextProvider>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('experiences', getExperiencesRequest);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

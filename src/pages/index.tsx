import { Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import { getExperiencesRequest } from '@/modules/Home/hooks/queries/useExperiences';
import { getLatestPostRequest } from '@/modules/Home/hooks/queries/useLatestPost';

import HomeContextProvider from '@/modules/Home/contexts/HomeContext';

import { HeroSection } from '@/modules/Home/components/HeroSection';
import { AboutMeSection } from '@/modules/Home/components/AboutMeSection';
import { LatestBlogPostSection } from '@/modules/Home/components/LatestBlogPostSection';
import { ContactsSection } from '@/modules/Home/components/ContactsSection';
import { ExperienceSection } from '@/modules/Home/components/ExperienceSection';
import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Home() {
  return (
    <PageWithSeo
      title="vitorpedeo | Home"
      description="I develop websites and, sometimes, I like to write about my work and studies. As you're visiting my website, feel free to enjoy all of its content!"
    >
      <Container pt="24" pb="64" maxW={1020}>
        <HomeContextProvider>
          <HeroSection />
          <AboutMeSection />
          <LatestBlogPostSection />
          <ExperienceSection />
          <ContactsSection />
        </HomeContextProvider>
      </Container>
    </PageWithSeo>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('latestPost', getLatestPostRequest);
  await queryClient.prefetchQuery('experiences', getExperiencesRequest);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

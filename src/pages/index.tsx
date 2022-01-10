import { Container } from '@chakra-ui/react';
import Head from 'next/head';

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

      <Container maxW={1020}>
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

export { getServerSideProps } from '@/modules/common/components/ChakraWrapper';

import { Container } from '@chakra-ui/react';
import Head from 'next/head';

import HomeContextProvider from '@/contexts/HomeContext';

import { HeroSection } from '@/components/Home/HeroSection';
import { AboutMeSection } from '@/components/Home/AboutMeSection';
import { LatestBlogPostSection } from '@/components/Home/LatestBlogPostSection';
import { ExperienceSection } from '@/components/Home/ExperienceSection';
import { ContactsSection } from '@/components/Home/ContactsSection';

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

export { getServerSideProps } from '@/components/ChakraWrapper';

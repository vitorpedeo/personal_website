import { Container } from '@chakra-ui/react';
import Head from 'next/head';

import { HeroSection } from '@/components/Home/HeroSection';
import { AboutMeSection } from '@/components/Home/AboutMeSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>vitorpedeo | Home</title>
      </Head>

      <Container maxW={1020}>
        <HeroSection />
        <AboutMeSection />
      </Container>
    </>
  );
}

export { getServerSideProps } from '@/components/ChakraWrapper';

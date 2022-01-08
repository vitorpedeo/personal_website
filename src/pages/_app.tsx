import { Container } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraWrapper } from '@/components/ChakraWrapper';
import { Header } from '@/components/Header';

import '@fontsource/rubik';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraWrapper cookies={pageProps.cookies}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <Container maxW={1020}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraWrapper>
  );
}

export default MyApp;

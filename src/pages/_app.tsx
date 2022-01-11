import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import { customTheme } from '@/modules/common/styles/theme';

import { Header } from '@/modules/common/components/Header';
import { ScrollToTop } from '@/modules/common/components/ScrollToTop';
import { Footer } from '@/modules/common/components/Footer';

import '@fontsource/rubik';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
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

      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;

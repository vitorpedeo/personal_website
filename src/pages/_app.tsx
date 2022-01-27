import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { IntlProvider } from 'react-intl';

import { customTheme } from '@/modules/common/styles/theme';
import { SEO } from '@/modules/common/services/seo';
import { localesMessages } from '@/modules/common/lib/translations';

import type { Locale, PathNames } from '@/modules/common/types';

import { PageLoading } from '@/modules/common/components/PageLoading';
import { Header } from '@/modules/common/components/Header';
import { PageTransition } from '@/modules/common/components/PageTransition';
import { ScrollToTop } from '@/modules/common/components/ScrollToTop';
import { Footer } from '@/modules/common/components/Footer';

import '@fontsource/rubik';

function MyApp({ Component, pageProps, router }: AppProps) {
  const { defaultLocale, locale, pathname } = useRouter();

  const currLocale = (locale || 'en-US') as Locale;
  const messages = localesMessages[currLocale][pathname as PathNames];

  return (
    <IntlProvider
      locale={currLocale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <ChakraProvider theme={customTheme}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
        </Head>

        <DefaultSeo {...SEO} />

        <PageLoading />

        <Header />
        <PageTransition identifier={router.asPath}>
          <Component {...pageProps} />
        </PageTransition>
        <ScrollToTop />
        <Footer />
      </ChakraProvider>
    </IntlProvider>
  );
}

export default MyApp;

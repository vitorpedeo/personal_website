import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';

import { customTheme } from '@/modules/common/styles/theme';

interface ChakraWrapperProps {
  cookies: string | undefined;
  children: ReactNode;
}

export function ChakraWrapper({ cookies, children }: ChakraWrapperProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={customTheme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

// This getServerSideProps needs to be used on EVERY page to avoid flashing
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
};

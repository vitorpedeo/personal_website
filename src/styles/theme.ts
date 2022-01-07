import { extendTheme, ThemeConfig } from '@chakra-ui/react';

type ChakraProps = {
  colorMode: 'light' | 'dark';
};

const colors = {
  heading: {
    light: '#333333',
    dark: '#ffffff',
  },
  text: {
    light: '#3d3d4d',
    dark: '#d8d8e7',
  },
  bg: {
    light: '#f6f8f7',
    dark: '#1f242a',
  },
  accent: {
    light: '#e7e7e7',
    dark: '#2e313a',
  },
  primary: {
    regular: '#0ab377',
    light: '#c7eade',
  },
};

const fonts = {
  heading: 'Rubik, sans-serif',
  body: 'Rubik, sans-serif',
};

const styles = {
  global: ({ colorMode }: ChakraProps) => ({
    body: {
      background: colorMode === 'light' ? 'bg.light' : 'bg.dark',
      color: colorMode === 'light' ? 'text.light' : 'text.dark',
      fontFamily: 'body',
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const customTheme = extendTheme({
  config,
  colors,
  fonts,
  styles,
});

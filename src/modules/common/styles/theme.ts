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
    light: '#ededed',
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

const components = {
  Button: {
    baseStyle: ({ colorMode }: ChakraProps) => ({
      background: colorMode === 'light' ? 'primary.regular' : 'primary.light',
      color: colorMode === 'light' ? 'white' : 'primary.regular',
    }),
  },
  Heading: {
    baseStyle: ({ colorMode }: ChakraProps) => ({
      color: colorMode === 'light' ? 'heading.light' : 'heading.dark',
    }),
  },
  Link: {
    baseStyle: ({ colorMode }: ChakraProps) => ({
      background: colorMode === 'light' ? 'primary.regular' : 'primary.light',
      color: colorMode === 'light' ? 'white' : 'primary.regular',
    }),
  },
  Text: {
    baseStyle: ({ colorMode }: ChakraProps) => ({
      color: colorMode === 'light' ? 'text.light' : 'text.dark',
    }),
  },
};

const styles = {
  global: ({ colorMode }: ChakraProps) => ({
    body: {
      minHeight: '100vh',
      background: colorMode === 'light' ? 'bg.light' : 'bg.dark',
      color: colorMode === 'light' ? 'text.light' : 'text.dark',
      fontFamily: 'body',
    },
    '#__next': {
      overflow: 'hidden',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: colorMode === 'light' ? 'heading.light' : 'heading.dark',
    },
    '::-webkit-scrollbar': {
      width: '10px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px',
      background: colorMode === 'light' ? 'bg.light' : 'bg.dark',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: colorMode === 'light' ? 'accent.dark' : 'accent.light',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background:
        colorMode === 'light'
          ? 'rgba(46, 49, 58, 0.8)'
          : 'rgba(237, 237, 237, 0.8)',
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const customTheme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles,
});

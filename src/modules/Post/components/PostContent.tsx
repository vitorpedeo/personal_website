import { Box } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import type { PostContentProps } from '@/modules/Post/types';

const markdownStyles = {
  '*': {
    letterSpacing: '0.02rem',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: '1.5rem 0',
    fontWeight: 'bold',
  },
  h1: {
    fontSize: '2.25rem',
  },
  h2: {
    fontSize: '1.875rem',
  },
  h3: {
    fontSize: '1.75rem',
  },
  h4: {
    fontSize: '1.5rem',
  },
  h5: {
    fontSize: '1.25rem',
  },
  h6: {
    fontSize: '1rem',
  },
  p: {
    fontSize: '1.125rem',

    '& + p': {
      marginTop: '1rem',
    },
  },
  a: {
    color: 'primary.regular',
    textDecoration: 'underline',
  },
  ul: {
    marginBottom: '1rem',
    paddingLeft: '2rem',

    li: {
      margin: '0.5rem 0',
    },
  },
};

export function PostContent({ content }: PostContentProps) {
  return (
    <Box mt="8" sx={markdownStyles}>
      <MDXRemote {...content} />
    </Box>
  );
}

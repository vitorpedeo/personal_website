import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import usePost from '@/modules/Post/hooks/queries/usePost';

import { CustomAlert } from '@/modules/common/components/CustomAlert';

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

export function PostContent() {
  const { query } = useRouter();
  const { slug } = query;

  const { data, isError, isLoading } = usePost(slug as string);

  function renderContent() {
    if (isError) {
      return (
        <CustomAlert
          status="error"
          title="Oops, something went wrong 😟"
          description="Could not fetch post content. Please, try again later"
        />
      );
    }

    if (isLoading) {
      return (
        <Flex align="center" justify="center">
          <Spinner size="xl" />
        </Flex>
      );
    }

    if (!data) {
      return null;
    }

    return (
      <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
        {data.content}
      </ReactMarkdown>
    );
  }

  return (
    <Box mt="8" sx={markdownStyles}>
      {renderContent()}
    </Box>
  );
}

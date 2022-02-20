import { Box, Link } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type { NormalComponents } from 'react-markdown/lib/complex-types';

import CodeBlock from '@/modules/common/components/CodeBlock';
import { InlineCode } from '@/modules/common/components/InlineCode';
import { PostImage } from '@/modules/common/components/PostImage';

import type { PostContentProps } from '@/modules/Post/types';
import type { Languages } from '@/modules/common/types';

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

const components: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  code: ({ node, inline, className, children, ...props }) => {
    const rawLanguage = /language-(\w+)/.exec(className || '');

    if (!inline && rawLanguage) {
      const language = rawLanguage[1] as Languages;
      const content = String(children).replace(/\n$/, '');

      return (
        <CodeBlock language={language} {...props}>
          {content}
        </CodeBlock>
      );
    }

    return <InlineCode {...props}>{children}</InlineCode>;
  },
  a: ({ href, children, ...props }) => (
    <Link
      href={href}
      isExternal
      background="transparent"
      color="primary.regular"
      {...props}
    >
      {children}
    </Link>
  ),
  img: ({ src, alt }) => {
    if (src) {
      return <PostImage src={`https:${src}`} altText={alt} />;
    }

    return <PostImage src={src} altText={alt} />;
  },
};

export function PostContent({ content }: PostContentProps) {
  return (
    <Box mt="8" sx={markdownStyles}>
      <ReactMarkdown
        remarkPlugins={[remarkBreaks, remarkGfm, remarkUnwrapImages]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
}

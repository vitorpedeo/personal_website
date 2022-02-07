import { Skeleton } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

const languages = {
  javascript: 'javascript',
  json: 'json',
  bash: 'bash',
  typescript: 'typescript',
  tsx: 'tsx',
};

SyntaxHighlighter.registerLanguage(languages.javascript, javascript);
SyntaxHighlighter.registerLanguage(languages.json, json);
SyntaxHighlighter.registerLanguage(languages.bash, bash);
SyntaxHighlighter.registerLanguage(languages.typescript, typescript);
SyntaxHighlighter.registerLanguage(languages.tsx, tsx);

interface CodeBlockProps {
  language: keyof typeof languages;
  children: ReactNode;
}

function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      customStyle={{ margin: '1.5rem 0' }}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default dynamic(() => Promise.resolve(CodeBlock), {
  ssr: false,
  loading: () => <Skeleton h="6" />,
});

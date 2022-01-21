import { Stack, StackProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { LinkItem } from './LinkItem';
import { ResumeDownloadButton } from './ResumeDownloadButton';

export function Links({ ...rest }: StackProps) {
  const { locale } = useRouter();

  const isEnglishLocaleActive = locale === 'en-US';

  return (
    <Stack
      as="nav"
      direction={{
        base: 'column',
        md: 'row',
      }}
      spacing="6"
      ml={{
        base: 0,
        md: '12',
      }}
      {...rest}
    >
      <LinkItem
        href="/projects"
        title={isEnglishLocaleActive ? 'Projects' : 'Projetos'}
      />
      <LinkItem href="/blog" title="Blog" />

      <ResumeDownloadButton />
    </Stack>
  );
}

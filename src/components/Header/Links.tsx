import { Stack, StackProps } from '@chakra-ui/react';

import { LinkItem } from './LinkItem';
import { ResumeDownloadButton } from './ResumeDownloadButton';

export function Links({ ...rest }: StackProps) {
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
      <LinkItem href="/projects" title="Projects" />
      <LinkItem href="/blog" title="Blog" />

      <ResumeDownloadButton />
    </Stack>
  );
}

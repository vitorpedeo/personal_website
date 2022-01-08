import { Heading, HeadingProps } from '@chakra-ui/react';

export function Logo({ ...rest }: HeadingProps) {
  return (
    <Heading size="xl" letterSpacing={2} {...rest}>
      {`<vitorpedeo/>`}
    </Heading>
  );
}

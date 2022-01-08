import { Heading, HeadingProps, useColorModeValue } from '@chakra-ui/react';

export function Logo({ ...rest }: HeadingProps) {
  const logoColor = useColorModeValue('heading.light', 'white');

  return (
    <Heading size="xl" color={logoColor} letterSpacing={2} {...rest}>
      {`<vitorpedeo/>`}
    </Heading>
  );
}

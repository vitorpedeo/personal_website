import { LinkProps, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export function Logo({ ...rest }: LinkProps) {
  const { pathname } = useRouter();

  const logoColor = useColorModeValue('heading.light', 'white');

  const isHomeActive = pathname === '/';

  return (
    <NextLink href="/" passHref>
      <Link
        background="transparent"
        color={logoColor}
        letterSpacing={2}
        fontSize="4xl"
        fontWeight="bold"
        pointerEvents={isHomeActive ? 'none' : 'all'}
        _hover={{
          textDecoration: 'none',
        }}
        {...rest}
      >
        {`<vitorpedeo/>`}
      </Link>
    </NextLink>
  );
}

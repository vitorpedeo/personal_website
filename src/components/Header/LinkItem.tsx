import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import useIsMobile from '@/hooks/useIsMobile';

interface LinkItemProps {
  href: string;
  title: string;
}

export function LinkItem({ href, title }: LinkItemProps) {
  const { pathname } = useRouter();

  const textColor = useColorModeValue('heading.light', 'white');
  const isMobile = useIsMobile();

  const active = href === pathname;

  return (
    <NextLink href={href} passHref>
      <Link
        py={isMobile ? '4' : '1'}
        px={isMobile ? '4' : '2'}
        borderRadius={6}
        background={active ? 'primary.light' : 'transparent'}
        color={active ? 'primary.regular' : textColor}
        fontSize="lg"
        pointerEvents={active ? 'none' : 'all'}
        _hover={
          active
            ? undefined
            : {
                background: 'primary.light',
                color: 'primary.regular',
              }
        }
      >
        {title}
      </Link>
    </NextLink>
  );
}

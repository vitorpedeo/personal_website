import { Flex } from '@chakra-ui/react';

import { Links } from './Links';
import { Logo } from './Logo';
import { MobileSidebar } from './MobileSidebar';
import { ThemeTogglerButton } from './ThemeTogglerButton';

export function Header() {
  /* I used sx prop with media queries because, again, SSR was not working properly.
   * It was necessary to use int this way so the page could be rendered correctly.
   */
  return (
    <Flex as="header" py="8" w="100%" align="center">
      <MobileSidebar
        sx={{
          '@media screen and (min-width: 768px)': {
            display: 'none',
          },
        }}
      />

      <Logo
        sx={{
          '@media screen and (max-width: 768px)': {
            display: 'none',
          },
        }}
      />

      <Links
        sx={{
          '@media screen and (max-width: 768px)': {
            display: 'none',
          },
        }}
      />
      <ThemeTogglerButton />
    </Flex>
  );
}

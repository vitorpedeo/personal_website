import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Links } from './Links';
import { Logo } from './Logo';
import { MobileSidebar } from './MobileSidebar';
import { ThemeTogglerButton } from './ThemeTogglerButton';

export function Header() {
  const [isBoxShadowVisible, setIsBoxShadowVisible] = useState(false);

  const bgColor = useColorModeValue('bg.light', 'bg.dark');

  function handleScroll() {
    if (window.scrollY > 105) {
      setIsBoxShadowVisible(true);
    } else {
      setIsBoxShadowVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* I used sx prop with media queries because, again, SSR was not working properly.
   * It was necessary to use int this way so the page could be rendered correctly.
   */
  return (
    <Box
      as="header"
      w="full"
      boxShadow={isBoxShadowVisible ? 'md' : 'none'}
      background={bgColor}
      position="sticky"
      top={0}
      transition="all 0.2s"
      zIndex="1"
    >
      <Container maxW={1020} py="8" display="flex" alignItems="center">
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
      </Container>
    </Box>
  );
}

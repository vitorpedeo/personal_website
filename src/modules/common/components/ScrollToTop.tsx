import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const bgColor = useColorModeValue('accent.light', 'accent.dark');
  const iconColor = useColorModeValue('heading.light', 'white');

  function handleWindowScroll() {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  function handleButtonClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <IconButton
      aria-label="Scroll to the top of the page"
      w="12"
      h="12"
      backgroundColor={bgColor}
      color={iconColor}
      fontSize="30px"
      icon={<IoArrowUp />}
      boxShadow="lg"
      position="fixed"
      right="8"
      bottom="4"
      zIndex="1"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.2s"
      onClick={handleButtonClick}
    />
  );
}

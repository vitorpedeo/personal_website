import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IoMoon, IoSunny } from 'react-icons/io5';

export function ThemeTogglerButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('accent.light', 'accent.dark');
  const iconColor = useColorModeValue('heading.light', 'white');

  const isLightThemeActive = colorMode === 'light';

  return (
    <IconButton
      aria-label={`Toggle ${isLightThemeActive ? 'dark' : 'light'} theme`}
      ml="auto"
      w="12"
      h="12"
      backgroundColor={bgColor}
      color={iconColor}
      fontSize="30px"
      icon={isLightThemeActive ? <IoMoon /> : <IoSunny />}
      onClick={() => toggleColorMode()}
    />
  );
}

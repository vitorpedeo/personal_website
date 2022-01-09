import {
  Box,
  BoxProps,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { IoMenu } from 'react-icons/io5';

import { Links } from './Links';
import { Logo } from './Logo';

export function MobileSidebar({ ...rest }: BoxProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('accent.light', 'accent.dark');
  const iconColor = useColorModeValue('heading.light', 'white');

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Box {...rest}>
      <IconButton
        ref={buttonRef}
        aria-label="Open sidebar"
        mr="auto"
        w="12"
        h="12"
        background={bgColor}
        color={iconColor}
        fontSize="30px"
        icon={<IoMenu />}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={buttonRef}
      >
        <DrawerOverlay />
        <DrawerContent background={bgColor}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <Divider />

          <DrawerBody py="4" px="6">
            <Links />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

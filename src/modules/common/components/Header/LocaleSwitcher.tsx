import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function LocaleSwitcher() {
  const { asPath, locale, pathname, push, query } = useRouter();

  const bgColor = useColorModeValue('accent.light', 'accent.dark');

  const isEnglishLocaleActive = locale === 'en-US';

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Change locale"
        ml="auto"
        w="12"
        h="12"
        backgroundColor={bgColor}
      >
        <Box
          mx="auto"
          w="7"
          h="7"
          borderRadius="full"
          position="relative"
          overflow="hidden"
        >
          <Image
            src={`/images/${
              isEnglishLocaleActive ? 'united_states_flag' : 'brazil_flag'
            }.svg`}
            alt={`${isEnglishLocaleActive ? 'United states' : 'Brazil'} flag`}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </MenuButton>
      <MenuList>
        {isEnglishLocaleActive ? (
          <MenuItem
            onClick={() =>
              push({ pathname, query }, asPath, { locale: 'pt-BR' })
            }
          >
            <Box
              mr="4"
              w="6"
              h="6"
              borderRadius="full"
              position="relative"
              overflow="hidden"
            >
              <Image
                src="/images/brazil_flag.svg"
                alt="Brazil flag"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Text as="span"> Mudar para PT-BR</Text>
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() =>
              push({ pathname, query }, asPath, { locale: 'en-US' })
            }
          >
            <Box
              mr="4"
              w="6"
              h="6"
              borderRadius="full"
              position="relative"
              overflow="hidden"
            >
              <Image
                src="/images/united_states_flag.svg"
                alt="United States flag"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Text as="span">Change to EN-US</Text>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}

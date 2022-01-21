import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { downloadResume } from '@/modules/common/services/downloadResume';

export function ResumeDownloadButton() {
  const { locale } = useRouter();

  const textColor = useColorModeValue('heading.light', 'white');

  const isEnglishLocaleActive = locale === 'en-US';

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="unstyled"
        py={['4', '4', '1']}
        pl={['4', '4', '2']}
        pr={['4', '4', '2']}
        h="auto"
        borderRadius={6}
        color={textColor}
        fontSize="lg"
        fontWeight="normal"
        textAlign={['left', 'left', 'center']}
        sx={{
          _hover: {
            background: 'primary.light',
            color: 'primary.regular',
          },
        }}
      >
        {isEnglishLocaleActive ? 'Resume' : 'Currículo'}
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => downloadResume('ptBR')}>
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
          <Text as="span">Português - BR</Text>
        </MenuItem>

        <MenuItem onClick={() => downloadResume('enUS')}>
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
          <Text as="span">English - US</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

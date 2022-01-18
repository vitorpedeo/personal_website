import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import { downloadResume } from '@/modules/common/services/downloadResume';

export function ResumeDownloadButton() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="primary"
        colorScheme="primary"
        size="lg"
        borderRadius={6}
        fontSize="lg"
        fontWeight="600"
        transition="all 0.2s"
        _hover={{
          filter: 'brightness(0.9)',
        }}
      >
        Download resume
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
          <Text as="span">Portuguese - BR</Text>
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

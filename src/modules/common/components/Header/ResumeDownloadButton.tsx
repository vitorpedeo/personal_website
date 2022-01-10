import { Button, useColorModeValue } from '@chakra-ui/react';

import useIsMobile from '@/modules/common/hooks/useIsMobile';

export function ResumeDownloadButton() {
  const textColor = useColorModeValue('heading.light', 'white');
  const isMobile = useIsMobile();

  return (
    <Button
      variant="unstyled"
      py={isMobile ? '4' : '1'}
      pl={isMobile ? '4' : '2'}
      pr={isMobile ? '4' : '2'}
      h="auto"
      borderRadius={6}
      color={textColor}
      fontSize="lg"
      fontWeight="normal"
      textAlign={isMobile ? 'left' : 'center'}
      sx={{
        _hover: {
          background: 'primary.light',
          color: 'primary.regular',
        },
      }}
    >
      Resume
    </Button>
  );
}

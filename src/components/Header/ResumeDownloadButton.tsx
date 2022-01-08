import { Button } from '@chakra-ui/react';

import useIsMobile from '@/hooks/useIsMobile';

export function ResumeDownloadButton() {
  const isMobile = useIsMobile();

  return (
    <Button
      variant="unstyled"
      py={isMobile ? '4' : '1'}
      pl={isMobile ? '4' : '2'}
      pr={isMobile ? '4' : '2'}
      h="auto"
      borderRadius={6}
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

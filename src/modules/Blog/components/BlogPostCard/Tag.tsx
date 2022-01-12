import { Box, Text } from '@chakra-ui/react';

export function Tag() {
  return (
    <Box py="1" px="2" borderRadius={6} background="primary.light">
      <Text color="primary.regular" fontSize="sm" fontWeight="bold">
        Front-End
      </Text>
    </Box>
  );
}

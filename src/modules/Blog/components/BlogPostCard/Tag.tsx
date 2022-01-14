import { Tag as ChakraTag } from '@chakra-ui/react';

export function Tag() {
  return (
    <ChakraTag
      size="lg"
      borderRadius={6}
      background="primary.light"
      color="primary.regular"
      fontWeight="bold"
    >
      Front-End
    </ChakraTag>
  );
}

import { Tag as ChakraTag, TagProps } from '@chakra-ui/react';

export function Tag({ children }: TagProps) {
  return (
    <ChakraTag
      size="lg"
      borderRadius={6}
      background="primary.light"
      color="primary.regular"
      fontWeight="bold"
    >
      {children}
    </ChakraTag>
  );
}

import { Box, Text } from '@chakra-ui/react';

interface TechProps {
  name: string;
  color: string;
}

export function Tech({ name, color }: TechProps) {
  const lightenColor = `${color}20`;

  return (
    <Box py="1" px="3" borderRadius={6} background={lightenColor}>
      <Text color={color} fontSize="sm" fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
}

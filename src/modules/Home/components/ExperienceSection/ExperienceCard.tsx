import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

export function ExperienceCard() {
  const bgColor = useColorModeValue('white', 'accent.dark');

  return (
    <Box
      as="article"
      p="6"
      borderRadius={8}
      background={bgColor}
      boxShadow="md"
    >
      <Heading size="md" lineHeight="6">
        Contta Inteligência Fiscal
      </Heading>

      <Text my="2" fontSize="lg" lineHeight="6">
        Front-End Developer
      </Text>

      <Text fontSize="sm" lineHeight="6">
        Sept. 2020 - Nov. 2021
      </Text>

      <Text my="4" fontSize="lg" lineHeight="6">
        Developed and maintained the main company’s project, which was a
        Dashboard containing financial informations of all registered companies
        by users.
      </Text>

      <Flex gap="4" align="center" wrap="wrap">
        <Box py="1" px="3" borderRadius={6} background="#61dafb20">
          <Text color="#61dafb" fontSize="sm" fontWeight="bold">
            ReactJS
          </Text>
        </Box>
        <Box py="1" px="3" borderRadius={6} background="#6fa86120">
          <Text color="#6fa861" fontSize="sm" fontWeight="bold">
            API Rest
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

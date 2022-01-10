import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

export function Footer() {
  const svgColor = useColorModeValue('white', '#2e313a');

  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      pt={['6', 0]}
      w="full"
      h={220}
      position="absolute"
      left={0}
      right={0}
      bottom={0}
      direction="column"
      align="center"
      justify="center"
      sx={{
        backgroundColor: svgColor,
        maskImage: 'url("/images/wave.svg")',
        maskRepeat: 'no-repeat',
        maskSize: 'cover',
      }}
    >
      <Flex
        pt={['12', '12', '6']}
        direction="column"
        align="center"
        justify="center"
      >
        <Text
          fontSize={['md', 'lg']}
          fontWeight="500"
          lineHeight="6"
          textAlign={['center', 'center', 'left']}
        >
          © {currentYear} Vitor Pereira. All rights reserved
        </Text>

        <Text
          my="4"
          fontSize={['md', 'lg']}
          lineHeight="6"
          textAlign={['center', 'center', 'left']}
        >
          Icons by{' '}
          <Link
            href="https://ionic.io/ionicons"
            isExternal
            background="transparent"
            color="primary.regular"
          >
            Ionicons
          </Link>
        </Text>

        <Text
          fontSize={['md', 'lg']}
          lineHeight="6"
          textAlign={['center', 'center', 'left']}
        >
          Developer SVG by{' '}
          <Link
            href="https://www.manypixels.co/gallery"
            isExternal
            background="transparent"
            color="primary.regular"
          >
            manypixels
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}

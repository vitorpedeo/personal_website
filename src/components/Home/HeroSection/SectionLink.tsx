import { Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface SectionLinkProps {
  title: string;
  icon: IconType;
}

export function SectionLink({ title, icon }: SectionLinkProps) {
  const bgColor = useColorModeValue('primary.regular', 'primary.light');
  const textColor = useColorModeValue('white', 'primary.regular');

  const href = `#${title.toLowerCase()}`;

  return (
    <Link
      href={href}
      py="3"
      maxW={160}
      w="100%"
      borderRadius={6}
      background={bgColor}
      color={textColor}
      fontSize="lg"
      fontWeight="600"
      textAlign="center"
      decoration="none"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="filter 0.2s"
      _hover={{
        textDecoration: 'none',
        filter: 'brightness(0.9)',
      }}
    >
      <Icon as={icon} mr="2" w="22px" h="22px" />
      {title}
    </Link>
  );
}

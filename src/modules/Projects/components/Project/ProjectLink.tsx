import { Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { IoLogoGithub, IoWifi } from 'react-icons/io5';

interface ProjectLinkProps {
  urlType: 'live' | 'repo';
  url: string;
}

export function ProjectLink({ urlType, url }: ProjectLinkProps) {
  const bgColor = useColorModeValue('primary.regular', 'primary.light');
  const textColor = useColorModeValue('white', 'primary.regular');

  const icon = urlType === 'live' ? IoLogoGithub : IoWifi;

  return (
    <Link
      isExternal
      href={url}
      py="3"
      maxW={160}
      w="100%"
      borderRadius={6}
      background={bgColor}
      color={textColor}
      fontSize="lg"
      fontWeight="600"
      textAlign="center"
      textTransform="capitalize"
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
      {urlType}
    </Link>
  );
}

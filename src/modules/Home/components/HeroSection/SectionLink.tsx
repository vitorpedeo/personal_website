import { Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { IconType } from 'react-icons';

import useTranslation from '@/modules/common/hooks/useTranslation';
import { useHomeContext } from '@/modules/Home/contexts/HomeContext';

interface SectionLinkProps {
  title: string;
  icon: IconType;
}

export function SectionLink({ title, icon }: SectionLinkProps) {
  const translate = useTranslation();

  const { experienceSectionRef, contactsSectionRef } = useHomeContext();

  const bgColor = useColorModeValue('primary.regular', 'primary.light');
  const textColor = useColorModeValue('white', 'primary.regular');

  const href = `#${title.toLowerCase()}`;

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const hash = event.currentTarget.hash as '#experience' | '#contacts';

    const refs = {
      '#experience': experienceSectionRef,
      '#contacts': contactsSectionRef,
    };
    const currRef = refs[hash];

    if (currRef?.current) {
      currRef?.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

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
      onClick={scrollToSection}
    >
      <Icon as={icon} mr="2" w="22px" h="22px" />
      {title === 'Experience'
        ? translate('experienceLinkLabel')
        : translate('contactsLinkLabel')}
    </Link>
  );
}

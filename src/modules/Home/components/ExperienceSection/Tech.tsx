import {
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import {
  SiCss3,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiFlutter,
  SiLaravel,
  SiOracle,
  SiVuedotjs,
} from 'react-icons/si';

import type { TechProps } from '@/modules/Home/types';

export function Tech({ name }: TechProps) {
  const textColor = useColorModeValue('white', 'bg.dark');
  const bgColor = useColorModeValue('bg.dark', 'white');

  const icons = useMemo(
    () => ({
      HTML: SiHtml5,
      CSS: SiCss3,
      Javascript: SiJavascript,
      React: SiReact,
      'Rest API': SiFastapi,
      Sass: SiSass,
      'Next.js': SiNextdotjs,
      Flutter: SiFlutter,
      Laravel: SiLaravel,
      PLSQL: SiOracle,
      Vue: SiVuedotjs,
    }),
    [],
  );

  return (
    <Tag
      variant="subtle"
      size="lg"
      borderRadius="full"
      background={bgColor}
      color={textColor}
      letterSpacing="0.02rem"
    >
      <TagLeftIcon as={icons[name]} />
      <TagLabel fontWeight="bold">{name}</TagLabel>
    </Tag>
  );
}

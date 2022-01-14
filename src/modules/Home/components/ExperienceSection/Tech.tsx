import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { useMemo } from 'react';
import {
  SiCss3,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
} from 'react-icons/si';

import { TechNames } from '@/modules/Home/types';

interface TechProps {
  name: TechNames;
  color: string;
}

export function Tech({ name, color }: TechProps) {
  const icons = useMemo(
    () => ({
      HTML: SiHtml5,
      CSS: SiCss3,
      Javascript: SiJavascript,
      React: SiReact,
      'API Rest': SiFastapi,
      Sass: SiSass,
      'Next.js': SiNextdotjs,
    }),
    [],
  );

  const lightenColor = `${color}20`;

  return (
    <Tag
      variant="subtle"
      size="lg"
      borderRadius="full"
      background={lightenColor}
      color={color}
    >
      <TagLeftIcon as={icons[name]} />
      <TagLabel fontWeight="bold">{name}</TagLabel>
    </Tag>
  );
}

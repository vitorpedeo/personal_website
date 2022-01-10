import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { useHomeContext } from '@/modules/Home/contexts/HomeContext';

export function ContactsSection() {
  const { contactsSectionRef } = useHomeContext();

  return (
    <Box ref={contactsSectionRef} as="section" id="contacts">
      <Heading size="xl" textAlign={['center', 'center', 'left']}>
        Contacts
      </Heading>

      <Text
        my="6"
        fontSize="lg"
        lineHeight="6"
        textAlign={['center', 'center', 'left']}
      >
        You can contact me on:
      </Text>

      <UnorderedList>
        <ListItem fontSize="lg">
          Gmail -{' '}
          <Link
            href="mailto:vitorpereiradeoli@gmail.com"
            background="transparent"
            color="primary.regular"
          >
            vitorpereiradeoli@gmail.com
          </Link>
        </ListItem>
        <ListItem my="4" fontSize="lg">
          Github -{' '}
          <Link
            href="https://github.com/vitorpedeo"
            isExternal
            background="transparent"
            color="primary.regular"
          >
            vitorpedeo
          </Link>
        </ListItem>
        <ListItem fontSize="lg">
          Github -{' '}
          <Link
            href="https://www.linkedin.com/in/vitor-pereira-309a7319b/"
            isExternal
            background="transparent"
            color="primary.regular"
          >
            Vitor Pereira
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
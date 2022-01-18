import { Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Custom404() {
  return (
    <PageWithSeo
      title="vitorpedeo | Page not found"
      description="Oops, this page doesn't exist 😟"
    >
      <Container pt="24" pb="64" maxW={1020}>
        <Heading size="4xl" textAlign="center">
          404
        </Heading>

        <Text mt="4" mb="8" fontSize="2xl" textAlign="center">
          Oops, this page doesn&apos;t exist 😟
        </Text>

        <Flex align="center" justify="center">
          <NextLink href="/" passHref>
            <Link
              py="3"
              px="6"
              borderRadius={6}
              fontSize="lg"
              fontWeight="600"
              transition="filter 0.2s"
              _hover={{
                textDecoration: 'none',
                filter: 'brightness(0.9)',
              }}
            >
              Back to home
            </Link>
          </NextLink>
        </Flex>
      </Container>
    </PageWithSeo>
  );
}

import { Button, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>vitorpedeo | Home</title>
      </Head>

      <Button onClick={() => toggleColorMode()}>{colorMode}</Button>
      <h1>My Personal Website!</h1>
    </div>
  );
}

export { getServerSideProps } from '../components/ChakraWrapper';

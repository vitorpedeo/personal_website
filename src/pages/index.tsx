import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>vitorpedeo | Home</title>
      </Head>

      <h1>My Personal Website!</h1>
    </>
  );
}

export { getServerSideProps } from '@/components/ChakraWrapper';

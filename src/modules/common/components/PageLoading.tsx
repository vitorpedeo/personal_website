import { Progress } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function PageLoading() {
  const router = useRouter();

  const [isChangingPage, setIsChangingPage] = useState(false);

  useEffect(() => {
    function onPageChangeStart(url: string) {
      if (url !== router.asPath) {
        setIsChangingPage(true);
      } else {
        setIsChangingPage(false);
      }
    }

    function onPageChangeFinish() {
      setIsChangingPage(false);
    }

    router.events.on('routeChangeStart', onPageChangeStart);
    router.events.on('routeChangeComplete', onPageChangeFinish);
    router.events.on('routeChangeError', onPageChangeFinish);

    return () => {
      router.events.off('routeChangeStart', onPageChangeStart);
      router.events.off('routeChangeComplete', onPageChangeFinish);
      router.events.off('routeChangeError', onPageChangeFinish);
    };
  }, [router]);

  if (isChangingPage) {
    return (
      <Progress
        size="xs"
        colorScheme="green"
        isIndeterminate
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex="2"
      />
    );
  }

  return null;
}

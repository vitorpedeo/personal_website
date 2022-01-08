import { useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
  /* useBreakpointValue was not working well alongside SSR.
   * So it was necessary to use this state to check if the client is mounted
   * to finally use useBreakpointValue hook.
   */
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? isMobile : null;
};

export default useIsMobile;

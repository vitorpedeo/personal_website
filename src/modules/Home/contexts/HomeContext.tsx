import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useMemo,
  useRef,
} from 'react';

type HomeContextData = {
  experienceSectionRef: RefObject<HTMLDivElement>;
  contactsSectionRef: RefObject<HTMLDivElement>;
};

interface HomeContextProviderProps {
  children: ReactNode;
}

const HomeContext = createContext({} as HomeContextData);

export default function HomeContextProvider({
  children,
}: HomeContextProviderProps) {
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const contactsSectionRef = useRef<HTMLDivElement>(null);

  const value = useMemo(
    () => ({ experienceSectionRef, contactsSectionRef }),
    [],
  );

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export const useHomeContext = () => useContext(HomeContext);

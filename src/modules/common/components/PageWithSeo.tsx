import type { NextSeoProps } from 'next-seo';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface PageWithSeoProps extends NextSeoProps {
  children: ReactNode;
}

export function PageWithSeo({
  title,
  description,
  children,
  ...rest
}: PageWithSeoProps) {
  const { asPath } = useRouter();

  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.vitorpedeo.dev'
      : 'http://localhost:3000';
  const url = `${baseUrl}${asPath}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
        {...rest}
      />
      {children}
    </>
  );
}

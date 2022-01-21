import { Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { getExperiences } from '@/modules/common/lib/experiences';
import { getLatestPost } from '@/modules/common/lib/posts';

import type { Locale } from '@/modules/common/types';
import type { HomeProps } from '@/modules/Home/types';

import HomeContextProvider from '@/modules/Home/contexts/HomeContext';

import { HeroSection } from '@/modules/Home/components/HeroSection';
import { AboutMeSection } from '@/modules/Home/components/AboutMeSection';
import { LatestBlogPostSection } from '@/modules/Home/components/LatestBlogPostSection';
import { ContactsSection } from '@/modules/Home/components/ContactsSection';
import { ExperienceSection } from '@/modules/Home/components/ExperienceSection';
import { PageWithSeo } from '@/modules/common/components/PageWithSeo';

export default function Home({ experiences, latestPost }: HomeProps) {
  return (
    <PageWithSeo
      title="vitorpedeo | Home"
      description="I develop websites and, sometimes, I like to write about my work and studies. As you're visiting my website, feel free to enjoy all of its content!"
    >
      <Container pt="24" pb="64" maxW={1020}>
        <HomeContextProvider>
          <HeroSection />
          <AboutMeSection />
          <LatestBlogPostSection latestPost={latestPost} />
          <ExperienceSection experiences={experiences} />
          <ContactsSection />
        </HomeContextProvider>
      </Container>
    </PageWithSeo>
  );
}

export const getStaticProps: GetStaticProps = async ctx => {
  const locale = ctx.locale as Locale;

  const experiences = getExperiences({ locale });
  const latestPost = getLatestPost({ locale });

  return {
    props: {
      experiences,
      latestPost,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

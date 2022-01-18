const title = 'vitorpedeo | Home';
const description =
  "I develop websites and, sometimes, I like to write about my work and studies. As you're visiting my website, feel free to enjoy all of its content!";
const url = 'https://www.vitorpedeo.dev';

export const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    title,
    description,
  },
};

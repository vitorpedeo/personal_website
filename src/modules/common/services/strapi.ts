export function getSrapiURL() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const strapiURL = isDevelopment
    ? 'http://localhost:1337/api'
    : process.env.NEXT_PUBLIC_PRODUCTION_URL;

  return strapiURL;
}

export function getStrapiMedia(rawUrl: string) {
  const strapiURL = getSrapiURL();
  const mediaUrl = strapiURL?.replace('/api', rawUrl) as string;

  return mediaUrl;
}

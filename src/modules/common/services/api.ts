import axios from 'axios';

import { getSrapiURL } from './strapi';

export function setupApiClient() {
  const baseURL = getSrapiURL();
  const apiToken = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  const apiClient = axios.create({
    baseURL,
    headers: {
      Authorization: apiToken,
    },
  });

  return apiClient;
}

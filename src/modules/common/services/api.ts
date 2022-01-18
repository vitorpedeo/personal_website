import axios from 'axios';

import { getStrapiURL } from './strapi';

export function setupApiClient() {
  const baseURL = getStrapiURL();

  const apiClient = axios.create({
    baseURL,
  });

  return apiClient;
}

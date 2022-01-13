import axios from 'axios';

import { getSrapiURL } from './strapi';

export function setupApiClient() {
  const baseURL = getSrapiURL();

  const apiClient = axios.create({
    baseURL,
  });

  return apiClient;
}

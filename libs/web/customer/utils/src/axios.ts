import {
  ACCOUNT_ID_PARAM,
  USER_ID_PARAM,
} from '@hepsikredili/web/customer/constant';
import axios from 'axios';
import { jwtToken } from './jwtToken';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken, decodedAccessToken } = jwtToken();
  if (accessToken && decodedAccessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };

    if (config.url) {
      config.url = config.url.replaceAll(
        ACCOUNT_ID_PARAM,
        decodedAccessToken.act
      );
      config.url = config.url.replaceAll(USER_ID_PARAM, decodedAccessToken.sub);
    }
  }

  return config;
});

axiosInstance.interceptors.response.use((res) => res);

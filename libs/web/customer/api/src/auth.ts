import {
  AuthResponse,
  LoginAuthDto,
  RegisterAuthCorporateDto,
  RegisterAuthIndividualDto,
} from '@hepsikredili/web/customer/typings';
import { axiosInstance } from '@hepsikredili/web/customer/utils';
import { setCookie } from 'nookies';
import { MutationFunction } from 'react-query';

export const authLogin: MutationFunction<AuthResponse, LoginAuthDto> = (data) =>
  axiosInstance.post<AuthResponse>(`auth/login`, data).then(({ data }) => {
    setCookie(null, 'accessToken', data.accessToken, {
      maxAge: 14 * 24 * 60 * 60,
      path: '/',
    });
    return data;
  });

export const authRegisterCorporate: MutationFunction<
  AuthResponse,
  RegisterAuthCorporateDto
> = (data) =>
  axiosInstance
    .post<AuthResponse>(`auth/register/corporate`, data)
    .then(({ data }) => {
      setCookie(null, 'accessToken', data.accessToken, {
        maxAge: 14 * 24 * 60 * 60,
        path: '/',
      });
      return data;
    });

export const authRegisterIndividual: MutationFunction<
  AuthResponse,
  RegisterAuthIndividualDto
> = (data) =>
  axiosInstance
    .post<AuthResponse>(`auth/register/individual`, data)
    .then(({ data }) => {
      setCookie(null, 'accessToken', data.accessToken, {
        maxAge: 14 * 24 * 60 * 60,
        path: '/',
      });
      return data;
    });

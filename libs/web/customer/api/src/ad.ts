import { Ad, QueryAds } from '@hepsikredili/web/customer/typings';
import { axiosInstance } from '@hepsikredili/web/customer/utils';
import { stringify } from 'querystring';
import { QueryFunction } from 'react-query';

export const readAds: QueryFunction<Ad[], ['ads', QueryAds]> = async (
  context
) =>
  (await axiosInstance.get<Ad[]>(`ads?${stringify(context.queryKey[1])}`)).data;

export const readAd: QueryFunction<Ad, ['ads', string]> = async (context) =>
  (await axiosInstance.get<Ad>(`ads/${context.queryKey[1]}`)).data;

import { readAd, readAds } from '@hepsikredili/web/customer/api';
import { QueryAds } from '@hepsikredili/web/customer/typings';
import { useQuery } from 'react-query';

export const useQueryAds = (queryAds: QueryAds) =>
  useQuery(['ads', queryAds], readAds);

export const useQueryAd = (adId: string | undefined) =>
  useQuery(['ads', adId ?? ''], readAd, {
    enabled: Boolean(adId),
  });

import type { AdType } from '@hepsikredili/web/customer/constant';
import create from 'zustand';
import { immer } from './store';

interface AdPageState {
  adId: string | undefined;
  adDetailsId: string | undefined;
  adType: AdType | undefined;

  setAdId: (adId: string) => void;
  setAdDetailsId: (adDetailsId: string) => void;
  setAdType: (adType: AdType) => void;
}

export const useStoreAdPage = create<AdPageState>(
  immer((set) => ({
    adDetailsId: undefined,
    adId: undefined,
    adType: undefined,

    setAdId: (adId) => set({ adId }),
    setAdDetailsId: (adDetailsId) => set({ adDetailsId }),
    setAdType: (adType) => set({ adType }),
  }))
);

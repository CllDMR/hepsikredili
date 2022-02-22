import {
  Account,
  AdDetail,
  Address,
  AdSatılıkDaire,
  AdSatılıkResidence,
  CreateAdSatılıkDaireDto,
  CreateAdSatılıkResidenceDto,
  PaymentEnum,
  UpdateAdSatılıkDaireDto,
  UpdateAdSatılıkResidenceDto,
} from '..';

export type Ad = AdCommon & (AdSatılıkDaire | AdSatılıkResidence);

export type AdCommon = {
  _id: string;
  published: boolean;
  owner: string | Account;
  no: string;
  detail: string | AdDetail;
  name: string;
  address: Address;
  price: number;
  images: { _id: string; url: string }[];
  payment: PaymentEnum;
};

export type QueryAds = { kind?: 'SatılıkDaire' | 'SatılıkResidence' };

export type CreateAdDto = CreateAdCommonDto &
  (CreateAdSatılıkDaireDto | CreateAdSatılıkResidenceDto);

export type CreateAdCommonDto = {
  name: string;
  address: Address;
  price: number;
  images: string[];
};

export type UpdateAdDto = UpdateAdCommonDto &
  (UpdateAdSatılıkDaireDto | UpdateAdSatılıkResidenceDto);

// eslint-disable-next-line
export type UpdateAdCommonDto = {};

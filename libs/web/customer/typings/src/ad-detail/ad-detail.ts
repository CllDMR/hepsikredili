import {
  Ad,
  AdDetailSatılıkDaire,
  AdDetailSatılıkResidence,
  CreateAdDetailSatılıkDaireDto,
  CreateAdDetailSatılıkResidenceDto,
  UpdateAdDetailSatılıkDaireDto,
  UpdateAdDetailSatılıkResidenceDto,
} from '..';

export type AdDetail = AdDetailCommon &
  (AdDetailSatılıkDaire | AdDetailSatılıkResidence);

export type AdDetailCommon = {
  _id: string;
  ad: string | Ad;
  description: string;
};

export type CreateAdDetailDto = CreateAdDetailCommonDto &
  (CreateAdDetailSatılıkDaireDto | CreateAdDetailSatılıkResidenceDto);

export type CreateAdDetailCommonDto = {
  description: string;
};

export type UpdateAdDetailDto = UpdateAdDetailCommonDto &
  (UpdateAdDetailSatılıkDaireDto | UpdateAdDetailSatılıkResidenceDto);

export type UpdateAdDetailCommonDto = {
  description?: string;
};

import { IsıtmaEnum, KimdenEnum, TapuDurumuEnum } from '..';

export type AdSatılıkDaire = {
  kind: 'SatılıkDaire';
  brütm2: number;
  netm2: number;
  odaSayısı: number;
  salonSayısı: number;
  binaYaşı: number;
  bulunduğuKat: number;
  katSayısı: number;
  ısıtma: IsıtmaEnum;
  banyoSayısı: number;
  balkon: boolean;
  eşyalı: boolean;
  kullanımDurumu: boolean;
  siteİçerisinde: boolean;
  siteAdı?: string;
  aidat?: number;
  krediyeUygun: boolean;
  tapuDurumu: TapuDurumuEnum;
  kimden: KimdenEnum;
  görüntülüArama: boolean;
  takas: boolean;
};

export type CreateAdSatılıkDaireDto = {
  kind: 'SatılıkDaire';
  brütm2: number;
  netm2: number;
  odaSayısı: number;
  salonSayısı: number;
  binaYaşı: number;
  bulunduğuKat: number;
  katSayısı: number;
  ısıtma: number;
  banyoSayısı: number;
  balkon: boolean;
  eşyalı: boolean;
  kullanımDurumu: boolean;
  siteİçerisinde: boolean;
  siteAdı?: string;
  aidat?: number;
  krediyeUygun: boolean;
  tapuDurumu: number;
  kimden: number;
  görüntülüArama: boolean;
  takas: boolean;
};

// eslint-disable-next-line
export type UpdateAdSatılıkDaireDto = {};

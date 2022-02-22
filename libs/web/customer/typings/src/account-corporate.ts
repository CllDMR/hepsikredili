import { Account, CreateAccountDto, UpdateAccountDto } from '.';

export type AccountCorporate = Account & {
  address: string;
  activityCategory: string;
  corporateType: string;
  taxCity: string;
  taxOffice: string;
  tcNo?: string;
  taxNo?: string;
};

export type CreateAccountCorporateDto = CreateAccountDto & {
  address: string;
  activityCategory: string;
  corporateType: string;
  taxCity: string;
  taxOffice: string;
  tcNo?: string;
  taxNo?: string;
};

// eslint-disable-next-line
export type UpdateAccountCorporateDto = UpdateAccountDto & {};

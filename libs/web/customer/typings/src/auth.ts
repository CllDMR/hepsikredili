export type JWTTokenClaims = {
  act: string;
  exp: number;
  iat: number;
  knd: string;
  sub: string;
};

export type JWTTokenPayload = {
  account: string;
  id: string;
  kind: string;
};

export type AuthResponse = {
  accessToken: string;
};

export type LoginAuthDto = {
  email: string;
  password: string;
};

export type RegisterAuthCorporateDto = {
  address: string;
  accountEmail: string;
  name: string;
  activityCategory: string;
  corporateType: string;
  taxCity: string;
  taxOffice: string;
  tcNo?: string;
  taxNo?: string;
  userEmail: string;
  password: string;
  firstname: string;
  lastname: string;
};

export type RegisterAuthIndividualDto = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

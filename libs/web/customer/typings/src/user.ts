import { Account } from '.';

export type User = {
  id: string;
  kind: string;
  account: string | Account;
  emailVerified: boolean;
  email: string;
  profile: Profile;
};

export type Profile = {
  firstname: string;
  lastname: string;
  gender: string;
  educationLevel: string;
  job: string;
};

export type UpdateProfileDto = {
  firstname?: string;
  lastname?: string;
  gender?: string;
  educationLevel?: string;
  job?: string;
};

export type UpdateUserEmailDto = {
  email: string;
};

export type UpdateUserPasswordDto = {
  password: string;
};

import type { Request } from 'express';
import { User } from '../mongoose/schemas/user.schema';

export type MyRequest = Request & {
  user: {
    user_id: User['_id'];
    account_ids: User['accounts'];
    role: User['role'];
  };
  jwtPayload: JWTPayload;
};

export type JWTPayload = { usr: string; accs: string[]; role: Role };

export enum Role {
  DEFAULT,
  CORPORATE_ADMIN,
  INDIVIDUAL_ADMIN,
  CORPORATE,
  INDIVIDUAL,
  SUPER_ADMIN,
}

import type { Request } from 'express';
import { UserBase } from './mongoose/schemas/user/user-base.schema';

export type MyRequest = Request & {
  user: {
    user_id: UserBase['_id'];
    account_id: UserBase['account'];
    user_kind: UserBase['kind'];
  };
  jwtPayload: JWTPayload;
};
export type JWTPayload = { usr: string; acc: string; knd: string };

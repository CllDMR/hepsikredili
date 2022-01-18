import type { Request } from 'express';
import { User } from './mongoose/schemas/user/user.schema';

export type MyRequest = Request & {
  user: {
    user_id: User['_id'];
    account_id: User['account'];
    user_kind: User['kind'];
  };
  jwtPayload: JWTPayload;
};
export type JWTPayload = { usr: string; acc: string; knd: string };

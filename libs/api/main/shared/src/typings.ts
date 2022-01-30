import type { Request } from 'express';
import { User } from './mongoose/schemas/user.schema';

export type MyRequest = Request & {
  user: {
    user_id: User['_id'];
    account_ids: User['accounts'];
  };
  jwtPayload: JWTPayload;
};
export type JWTPayload = { usr: string; accs: string[] };

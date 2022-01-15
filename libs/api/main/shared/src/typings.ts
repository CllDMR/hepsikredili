import type { Request } from 'express';
import { User } from '.';

export type MyRequest = Request & { user: User & { _id: string } };
export type JWTPayload = { sub: string };

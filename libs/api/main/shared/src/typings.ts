import type { Request } from 'express';

export type MyRequest = Request & { jwtPayload: JWTPayload };
export type JWTPayload = { usr: string; acc: string; knd: string };

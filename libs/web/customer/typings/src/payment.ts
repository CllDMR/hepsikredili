import { Account } from '.';

export type Payment = { owner: string | Account; price: number };

export type CreatePaymentDto = { owner: string; price: number };

// eslint-disable-next-line
export type UpdatePaymentDto = {};

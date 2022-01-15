import { Payment } from './payment.schema';

describe('Payment Data-access', () => {
  it('should be defined', () => {
    expect(new Payment()).toBeDefined();
  });
});

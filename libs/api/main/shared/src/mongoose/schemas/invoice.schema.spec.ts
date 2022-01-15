import { Invoice } from './invoice.schema';

describe('Invoice Data-access', () => {
  it('should be defined', () => {
    expect(new Invoice()).toBeDefined();
  });
});

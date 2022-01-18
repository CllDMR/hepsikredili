import { Address } from './address.schema';

describe('Address Data-access', () => {
  it('should be defined', () => {
    expect(new Address()).toBeDefined();
  });
});

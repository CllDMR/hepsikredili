import { AccountBase } from './base.schema';

describe('Account Data-access', () => {
  it('should be defined', () => {
    expect(new AccountBase()).toBeDefined();
  });
});

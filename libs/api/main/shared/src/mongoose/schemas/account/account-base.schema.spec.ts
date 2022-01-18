import { AccountBase } from './account-base.schema';

describe('Account Data-access', () => {
  it('should be defined', () => {
    expect(new AccountBase()).toBeDefined();
  });
});

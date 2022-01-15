import { Account } from './account.schema';

describe('Account Data-access', () => {
  it('should be defined', () => {
    expect(new Account()).toBeDefined();
  });
});

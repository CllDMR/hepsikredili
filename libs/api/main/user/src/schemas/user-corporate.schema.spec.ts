import { UserCorporate } from './user-corporate.schema';

describe('UserCorporate Data-access', () => {
  it('should be defined', () => {
    expect(new UserCorporate()).toBeDefined();
  });
});

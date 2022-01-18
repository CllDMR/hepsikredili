import { UserBase } from './user-base.schema';

describe('UserBase Data-access', () => {
  it('should be defined', () => {
    expect(new UserBase()).toBeDefined();
  });
});

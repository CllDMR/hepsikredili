import { User } from './user-base.schema';

describe('UserBase Data-access', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});

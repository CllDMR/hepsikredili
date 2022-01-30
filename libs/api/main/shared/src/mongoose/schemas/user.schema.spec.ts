import { User } from './user.schema';

describe('UserBase Data-access', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});

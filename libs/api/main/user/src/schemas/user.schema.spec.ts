import { User } from './user.schema';

describe('User Data-access', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});

import { Profile } from './profile.schema';

describe('Profile Data-access', () => {
  it('should be defined', () => {
    expect(new Profile()).toBeDefined();
  });
});

import { Ad } from './ad.schema';

describe('Ad Data-access', () => {
  it('should be defined', () => {
    expect(new Ad()).toBeDefined();
  });
});

import { UserIndividual } from './user-individual.schema';

describe('UserIndividual Data-access', () => {
  it('should be defined', () => {
    expect(new UserIndividual()).toBeDefined();
  });
});

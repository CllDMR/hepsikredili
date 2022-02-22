import { render } from '@testing-library/react';
import AuthFormRegisterIndividualMembership from './register-individual-membership';

describe('Auth Form RegisterIndividualMembership', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthFormRegisterIndividualMembership />);
    expect(baseElement).toBeTruthy();
  });
});

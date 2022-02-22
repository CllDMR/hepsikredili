import { render } from '@testing-library/react';
import AuthFormRegisterCorporateAccount from './register-corporate-account';

describe('Auth Form RegisterCorporateAccount', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthFormRegisterCorporateAccount />);
    expect(baseElement).toBeTruthy();
  });
});

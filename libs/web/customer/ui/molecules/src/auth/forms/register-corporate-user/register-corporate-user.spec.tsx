import { render } from '@testing-library/react';
import AuthFormRegisterCorporateUser from './register-corporate-user';

describe('Auth Form RegisterCorporateUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthFormRegisterCorporateUser />);
    expect(baseElement).toBeTruthy();
  });
});

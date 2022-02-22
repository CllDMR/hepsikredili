import { render } from '@testing-library/react';
import AuthFormLogin from './login';

describe('Auth Form Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthFormLogin />);
    expect(baseElement).toBeTruthy();
  });
});

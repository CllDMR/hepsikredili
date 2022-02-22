import { render } from '@testing-library/react';
import RedirectLogin from './login';

describe('Auth Redirect Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedirectLogin />);
    expect(baseElement).toBeTruthy();
  });
});

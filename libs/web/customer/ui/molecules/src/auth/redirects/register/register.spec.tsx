import { render } from '@testing-library/react';
import RedirectRegister from './register';

describe('Auth Redirect Register', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedirectRegister />);
    expect(baseElement).toBeTruthy();
  });
});

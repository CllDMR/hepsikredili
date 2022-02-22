import { render } from '@testing-library/react';
import SectionAuthLogin from './login';

describe('Section Auth Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionAuthLogin />);
    expect(baseElement).toBeTruthy();
  });
});

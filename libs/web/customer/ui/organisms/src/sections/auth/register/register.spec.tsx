import { render } from '@testing-library/react';
import SectionAuthRegister from './register';

describe('Section Auth Register', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionAuthRegister />);
    expect(baseElement).toBeTruthy();
  });
});

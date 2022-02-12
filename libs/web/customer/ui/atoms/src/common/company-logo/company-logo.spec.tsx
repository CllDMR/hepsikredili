import { render } from '@testing-library/react';

import CompanyLogo from './company-logo';

describe('CompanyLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompanyLogo />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import SectionServices from './section-services';

describe('SectionServices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionServices />);
    expect(baseElement).toBeTruthy();
  });
});

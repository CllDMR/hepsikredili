import { render } from '@testing-library/react';

import SectionHowItWorks from './section-how-it-works';

describe('SectionHowItWorks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionHowItWorks />);
    expect(baseElement).toBeTruthy();
  });
});

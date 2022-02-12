import { render } from '@testing-library/react';

import SectionHero from './section-hero';

describe('SectionHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionHero />);
    expect(baseElement).toBeTruthy();
  });
});

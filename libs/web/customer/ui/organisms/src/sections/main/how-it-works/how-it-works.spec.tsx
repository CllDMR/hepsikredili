import { render } from '@testing-library/react';
import SectionMainHowItWorks from './how-it-works';

describe('Section Main HowItWorks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionMainHowItWorks />);
    expect(baseElement).toBeTruthy();
  });
});

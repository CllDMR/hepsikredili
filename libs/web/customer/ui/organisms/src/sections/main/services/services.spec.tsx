import { render } from '@testing-library/react';
import SectionMainServices from './services';

describe('Section Main Services', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionMainServices />);
    expect(baseElement).toBeTruthy();
  });
});

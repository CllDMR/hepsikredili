import { render } from '@testing-library/react';

import InputCheck from './input-check';

describe('InputCheck', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputCheck />);
    expect(baseElement).toBeTruthy();
  });
});

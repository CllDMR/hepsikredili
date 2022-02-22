import { render } from '@testing-library/react';
import NextLink from './next-link';

describe('NextLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextLink href="" />);
    expect(baseElement).toBeTruthy();
  });
});

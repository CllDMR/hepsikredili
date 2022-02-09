import { render } from '@testing-library/react';
import ButtonContained from './contained';

describe('ButtonContained', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonContained title="" />);
    expect(baseElement).toBeTruthy();
  });
});

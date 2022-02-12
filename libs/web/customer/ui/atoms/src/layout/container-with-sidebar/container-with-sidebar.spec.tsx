import { render } from '@testing-library/react';

import ContainerWithSidebar from './container-with-sidebar';

describe('ContainerWithSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainerWithSidebar />);
    expect(baseElement).toBeTruthy();
  });
});

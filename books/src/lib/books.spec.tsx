import { render } from '@testing-library/react';

import AcmeBooks from './books';

describe('AcmeBooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AcmeBooks />);
    expect(baseElement).toBeTruthy();
  });
});

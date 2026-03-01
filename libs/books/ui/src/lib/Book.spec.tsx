import { render } from '@testing-library/react';

import Book from './Book';

describe('Book', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Book
        book={{
          id: 1,
          title: 'Test Title',
          author: 'Test Author',
          price: 9.99,
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

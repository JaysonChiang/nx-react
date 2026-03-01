import { render } from '@testing-library/react';
import Books from './Books';

describe('Books', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Books
        books={[
          {
            id: 1,
            title: 'Test Title',
            author: 'Test Author',
            price: 9.99,
          },
        ]}
        onAdd={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

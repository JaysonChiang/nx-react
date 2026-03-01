import { getBooks } from './data-access.js';

describe('getBooks', () => {
  it('should return books', async () => {
    const books = await getBooks();
    expect(books.length).toBeGreaterThan(0);
  });
});

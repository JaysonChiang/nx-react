import {useEffect, useState } from 'react';
import { getBooks } from '@acme/books-data-access';
import { Books } from '@acme/books-ui';  

export function BooksFeature() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then((books)=>{
      setBooks(books);
    });
  }, [])

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => console.log('Add to cart:', book)} />
    </>
  );
}

export default BooksFeature;

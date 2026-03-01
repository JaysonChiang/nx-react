import styled from 'styled-components';
import { Book } from './Book';
import { IBook } from '@acme/shared-models';

export interface BooksProps {
  books: IBook[];
  onAdd: (book: IBook) => void;
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Books = ({ books, onAdd }: BooksProps) => {
  return (
    <StyledBooks>
      {books.map((book) => (
        <Book key={book.id} book={book} onAdd={onAdd}></Book>
      ))}
    </StyledBooks>
  );
};

export default Books;

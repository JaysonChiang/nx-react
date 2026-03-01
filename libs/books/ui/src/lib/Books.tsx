import styled from 'styled-components';
import { Book } from './Book';

export interface BooksProps {
  books: any[];
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Books = ({ books }: BooksProps) => {
  return (
    <StyledBooks>
      {books.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
    </StyledBooks>
  );
};

export default Books;

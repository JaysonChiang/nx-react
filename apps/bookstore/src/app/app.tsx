import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { AcmeBooks } from '@acme/books';
import { GlobalStyles, Header, Main, NavigationItem, NavigationList } from '@acme/ui';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Booksore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>

      <Main role="navigation">
        <Routes>
          <Route path="/books" element={<AcmeBooks />} />
          <Route path="/" element={<Navigate to="/books" replace />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;

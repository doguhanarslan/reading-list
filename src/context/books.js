import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBook = books.map((book) => {
      if (id == book.id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBook);
  };

  const deleteBookById = async (id) => {
    axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
};

export { Provider };
export default BooksContext;

import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookShow from "./components/BookShow";
import BookList from "./components/BookList";
import BookEdit from "./components/BookEdit";
import axios from "axios";
import useBooksContext from "./hooks/use-books-context";
const App = () => {

  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  },[])



  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList/>
      <BookCreate/>
    </div>
  );
};
export default App;
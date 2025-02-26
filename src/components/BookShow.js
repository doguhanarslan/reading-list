import { useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";
const BookShow = ({ book, }) => {
  const { deleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id,newTitle) => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />
          <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}></button>
        <button className="delete" onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
};
export default BookShow;

import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";
const BookEdit = ({book,onSubmit}) => {
    const { editBookById } = useBooksContext();
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>
                {book.title}
            </label>
            <input value={title} className="input" onChange={handleChange}></input>
            <button className="button-primary">Save</button>
        </form>
    )
}
export default BookEdit;
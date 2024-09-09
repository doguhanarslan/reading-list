import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
    const { createBook } = useBooksContext();

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <label className="title">Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button" onSubmit={handleSubmit}>Button</button>
            </form>
        </div>
    )
}
export default BookCreate;
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookList = () => {

    const [books, setBooks] = useState( [] );

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await axios.get('http://localhost/crud-api/api/book');
        setBooks(res.data.data);
    };

    const deleteBook = async (id) => {
        const res = await axios.delete(`http://localhost/crud-api/api/deletebook/${id}`);
        if(res.data.status === 200){
            getData();
        }
    }

    var id = 1;

    const getBooks = books.map(book => {
        return <tr key={book.id}>
                <td>{id ++}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <td>{book.price}</td>
                <td>
                    <Link to={`/editbook/${book.id}`}  className="btn btn-sm btn-secondary mx-1">Edit</Link>
                    <button onClick={()=>(deleteBook(book.id))} className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
    });

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th width="10%">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getBooks}
                </tbody>
            </table>
        </div>
    )
}

export default BookList;
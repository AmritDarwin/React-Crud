import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const EditBook = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const {id} = useParams();

    useEffect(() => {
        const getBook = async () => {
            const book = await axios.get(`http://localhost/crud-api/api/editbook/${id}`);
            setTitle(book.data.title);
            setAuthor(book.data.author);
            setDescription(book.data.description);
            setPrice(book.data.price);
        }
        getBook();
    }, [])

    const formData = {
        'title': title,
        'author': author,
        'description': description,
        'price': price
    };

    const updateForm = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost/crud-api/api/updatebook/${id}`,formData);
        if(res.status === 200){
            console.log(res);
            alert('Book Updated');
        }
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-5">
          <h4>Edit Book</h4>
          <form id="form" onSubmit={updateForm}>
            <div className="form-group">
              <label className="form-control-label">Book Title</label>
              <input className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" />
            </div>
            <div className="form-group">
              <label className="form-control-label">Book Author</label>
              <input className="form-control" onChange={(e) => setAuthor(e.target.value)} value={author} type="text" name="author" />
            </div>
            <div className="form-group">
              <label className="form-control-label">Book Description</label>
              <input className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="description" />
            </div>
            <div className="form-group">
              <label className="form-control-label">Book Price</label>
              <input className="form-control" onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="price" />
            </div>
            <div className="form-group float-end">
              <input type="submit" className="btn btn-secondary btn-sm mt-2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;

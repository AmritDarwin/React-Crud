import React, { useState } from 'react';
import axios from 'axios';

function Book() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const formData = {
    'title': title,
    'author': author,
    'description': description,
    'price': price
  };

  const data = async (e) => {
    e.preventDefault();
    const result = await axios.post(`http://localhost/crud-api/api/book`, formData);
    if(result.status === 200){
      setTitle('');
      setAuthor('');
      setDescription('');
      setPrice('');
      alert('book added');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-5">
        <h4>Add Book</h4>
          <form id="form" onSubmit={data}>
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
}

export default Book;

import { connect } from 'react-redux';
import { uploadBook } from './actions/bookActions';
import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const Uploadbooks = ({ uploadBook }) => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Romance",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
    "Fantasy",
    "Comics"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const book_title = form.book_title.value;
    const author_name = form.author_name.value;
    const image_uri = form.image_uri.value;
    const category = selectedBookCategory;
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;
    const price = form.price.value;
    const bookObj = {
      book_title,
      author_name,
      image_uri,
      category,
      book_description,
      book_pdf_url,
      price,
    };

    // Send data to the database
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json().then(data => {
      alert("Book Uploaded successfully!!!");
      form.reset();
    }));

    // Dispatch the action to upload the book
    await uploadBook(bookObj);

    // Clear the form
    form.reset();
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-4 best font-bold'>Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="container">
        {/* First row */}
        <div className='row mb-3'>
          <div className='col-lg-6'>
            <div className="mb-2">
              <Label
                htmlFor="book_title"
                value="Book Title"
              />
            </div>
            <TextInput
              id="book_title"
              name="book_title"
              placeholder="Book Name"
              required
              type="text"
            />
          </div>
          <div className='col-lg-6'>
            <div className="mb-2">
              <Label
                htmlFor="author_name"
                value="Author Name"
              />
            </div>
            <TextInput
              id="author_name"
              name="author_name"
              placeholder="Author Name"
              required
              type="text"
            />
          </div>
        </div>
        {/* Second row */}
        <div className='row mb-3'>
          <div className='col-lg-6'>
            <div className="mb-2">
              <Label
                htmlFor="image_uri"
                value="Book Image"
              />
            </div>
            <TextInput
              id="image_uri"
              name="image_uri"
              placeholder="Book Image URL"
              required
              type="text"
            />
          </div>
          <div className='col-lg-6'>
            <div className="mb-2">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>
            <Select
              id='inputState'
              name='categoryName'
              className='w-full rounded'
              value={selectedBookCategory}
              onChange={(event) => setSelectedBookCategory(event.target.value)}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Book description */}
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="book_description"
              value="Book Description"
            />
          </div>
          <Textarea
            id="book_description"
            name='book_description'
            placeholder="Write your book description..."
            required
            className='w-100'
            rows={6}
          />
        </div>
        {/* Book PDF link */}
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="book_pdf_url"
              value="Book PDF URL"
            />
          </div>
          <TextInput
            id="book_pdf_url"
            name="book_pdf_url"
            placeholder="Book PDF URL"
            required
            type="text"
          />
        </div>
        <div className="mb-3">
          <div className="mb-2">
            <Label
              htmlFor="price"
              value="Book Price"
            />
          </div>
          <TextInput
            id="price"
            name="price"
            placeholder="Book Price"
            required
            type="text"
          />
        </div>
        <Button type="submit" className='btn btn-primary'>
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default connect(null, { uploadBook })(Uploadbooks);

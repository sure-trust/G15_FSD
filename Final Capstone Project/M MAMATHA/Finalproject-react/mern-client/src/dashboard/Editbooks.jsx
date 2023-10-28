import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';


const Editbooks = () => {
  const {id} = useParams();
   const {book_title, author_name, image_uri, category, book_description, book_pdf_url, price} = useLoaderData()
   const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
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
    "comics",
    
  
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
  console.log(event.target.value);
  setSelectedBookCategory(event.target.value);
  }
  //handle  book sumistion
  const handleUpdate = (event) => {
    event.preventDefault();
   const form = event.target;

    const book_title = form.book_title.value;
    const author_name = form.author_name.value;
    const image_uri = form.image_uri.value;
    const category = form.categoryName.value; 
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;
    const price = form.price.value;
   
    const UpdateBookObj = {
      book_title, author_name, image_uri, category, book_description, book_pdf_url, price
    }
    //console.log(bookObj);
    //update the book
    fetch(`http://localhost:5000/book/${id}`, {
      method:"PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(UpdateBookObj )
    }).then(res => res.json().then(data => {
      //console.log(data)
      alert("Book UpDated successfully!!!")
     
      
    }))

   
   
  }
  return (
    <div className=' px-4 my-12'>
<h2 className='mb-8 best font-bold'>UpDate The Book Data</h2>
<form  onSubmit={handleUpdate } className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* frist row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
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
          defaultValue={book_title}
        />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
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
          defaultValue={author_name}
        />
      </div>
       </div>
       {/* second row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
            htmlFor="image_uri"
            value="Book Image"
          />
        </div>
        <TextInput
          id="image_uri"
          name="image_uri"
          placeholder="Book Image URl"
          required
          type="url"
          defaultValue={image_uri}
        />
      </div>
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label
            htmlFor="inputState"
            value="Book Category"
          />
        </div> 
  
        <Select id='inputState' name='categoryName' className='w-full rounded ' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
          bookCategories.map((option) => <option key={option} value={option} > {option} </option>)  
          }

        </Select>
    
      </div>
        

      </div>
      {/* book_description */}
      <div>
        <div className="mb-2 block">
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
        className='w-full'
        rows={6}
        defaultValue={book_description}
      />
       
      </div>
      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
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
          type="url"
          defaultValue={book_pdf_url}
        />
      </div>
      <div>
        <div className="mb-2 block">
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
          type="number"
          defaultValue={price}
        />
      </div>
      <Button type="submit" className='mt-5'>
        UpDate Book
      </Button>
     
    </form>
    </div>
  )

        }
export default Editbooks
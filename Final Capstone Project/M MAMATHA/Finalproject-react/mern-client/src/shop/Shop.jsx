import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { useCart } from '../contexts/cart1';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Added state for category filtering
  const [expandedDescription, setExpandedDescription] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDescriptionToggle = (index) => {
    if (expandedDescription === index) {
      setExpandedDescription(null);
    } else {
      setExpandedDescription(index);
    }
  };

  const handleBuyNow = (book) => {
    setCart([...cart, book]);
    toast.success('Item added to cart');
  };

  const filteredBooks = books.filter((book) => (
    (selectedCategory === 'All' || book.category === selectedCategory) && 
    (book.book_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase()))
  ));

  const categories = ["All", "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction", "Horror", "Bibliography", "Autobiography", "History", "Romance", "Self-help", "Memoir", "Business", "Children Books", "Travel", "Religion", "Art and Design", "Fantasy", "Comics"];

  return (
    <div className="mt-24 px-4 lg:px-24">
      <h2 className="best font-bold text-center">All Books are here!</h2>
      <div className="flex items-center justify-center my-4">
        <input
          type="text"
          placeholder="Search Books"
          className="border p-2 rounded-l-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded-r-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-r-md"
          onClick={() => setSearchQuery('')}
        >
          Search
        </button>
      </div>
      <div className="grid gap-8 my-2 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {filteredBooks.map((book, index) => (
          <Card key={book.id} className="rounded-lg p-4 shadow-md">
            <img src={book.image_uri} alt={book.book_title} className="w-full h-64 object-cover" />
            <span className="font-bold text-blue-700">$ {book.price}</span>
            <h6 className="text-5 font-bold mt-4">{book.book_title}</h6>
            <span className="font-bold text-blue-700"># {book.category}</span>
            {expandedDescription === index ? (
              <p className="text-gray-700 mt-2">{book.book_description}</p>
            ) : (
              <p className="text-gray-700 mt-1 line-clamp-3">{book.book_description}</p>
            )}
            <div className="mt-4 flex justify-between items-center">
              <div className="flex flex-col items-start">
                <button
                  className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-900"
                  onClick={() => handleDescriptionToggle(index)}
                >
                  {expandedDescription === index ? 'Read Less' : 'Read More'}
                </button>
              </div>
              <button
                className="bg-green-600 text-white px-2 py-2 rounded-full hover-bg-green-700"
                onClick={() => handleBuyNow(book)}
              >
                Add to cart
              </button>
            </div>
          </Card>
        ))}
      </div>
      <ToastContainer /> {/* Add the toast container here */}
    </div>
  );
};
export default Shop;

import React, { useEffect, useState } from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]); // Add this state to store all books

  // Function to fetch all books
  const fetchAllBooks = () => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  const handleSearch = () => {
    // Fetch all books when performing a search
    fetchAllBooks();

    const filteredResults = books.filter((book) => {
      return (
        book.book_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  // Function to clear the search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  // Fetch all books on component load
  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className='px-5 lg:px-27 bg-teal-200 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* {left side} */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='red font-bold leading-snug'>
            Buy and Sell Your Books <span className='text-blue-700'>for <br />the Best Prices</span>
          </h2>
          <p className='m-w-4/5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit illum voluptatum reprehenderit dolorum
            eligendi unde. Accusantium animi qui, explicabo earum aut est harum unde, sint laudantium cupiditate eaque
            veritatis!
          </p>
         
        </div>

        {/* {right side} */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;



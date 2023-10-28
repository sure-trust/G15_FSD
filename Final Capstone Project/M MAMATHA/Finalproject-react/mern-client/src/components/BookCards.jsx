


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const BookCards = ({ headline, books }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = books.filter((book) => (
      book.book_title.toLowerCase().includes(query) || 
      book.category.toLowerCase().includes(query)
    ));
    setFilteredBooks(filtered);
  };

  const handleClear = () => {
    setSearchQuery('');
    setFilteredBooks(books); // Reset to the original list of books
  };

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='best text-center font-bold text-black my-5'>{headline}</h2>

      {/* Search input and buttons */}
      <div className='mb-2'>
        <div className='flex'>
          <input
            type='text'
            placeholder='Search by Title or Category'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search border p-2 rounded-l-md flex-grow'
          />
          <button
            className='bg-blue-700 text-white px-4 py-2 rounded-r-md'
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className='bg-red-700 text-white px-4 py-2 rounded-r-md ml-2'
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className='mySwiper w-full h-full'
        >
          {filteredBooks.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative'>
                  <div>
                    <img src={book.image_uri} alt='' />
                    <div className='absolute top-2 bg-blue-700 hover:bg-black left-3 p-2 rounded'>
                      <FaCartShopping className='w-4 h-4 text-white' />
                    </div>
                  </div>
                  <div>
                    <h3>{book.book_title}</h3>
                    <p>{book.author_name}</p>
                  </div>
                  <div>
                    <p>${book.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;

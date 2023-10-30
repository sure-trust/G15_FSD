

import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Dash = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then((res) => res.json()).then((data) => setAllBooks(data));
  }, []);

  const handleSearch = () => {
    // Filter the books based on the search query
    const filteredBooks = allBooks.filter((book) =>
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setAllBooks(filteredBooks);
  };

  const handleClear = () => {
    // Reset the books to the original list
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
    setSearchQuery('');
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 best font-bold">All Your Books</h2>
      {/* Search input and buttons */}
      <div className="mb-2">
        <div className="flex">
          <input
            type="text"
            placeholder="Search by Category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search border p-2 rounded-l-md flex-grow"
          />
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-r-md"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="bg-red-700 text-white px-4 py-2 rounded-r-md ml-2"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Table */}
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.book_title}
              </Table.Cell>
              <Table.Cell>{book.author_name}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{book.price}</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default Dash;

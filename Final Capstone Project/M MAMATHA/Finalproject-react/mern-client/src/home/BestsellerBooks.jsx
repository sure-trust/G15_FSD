import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestsellerBooks = () => {
    const[books, setbooks] = useState([]);
  useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setbooks(data.slice(0,6))); // Corrected to console.log
    }, []);
    
  return (
    <div>
        <BookCards books={books} headline="Best Seller books"/>
    </div>
  )
}

export default BestsellerBooks
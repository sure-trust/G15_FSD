import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useCart } from '../contexts/cart1'; // Import the cart context
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const Singlebook = () => {
  const { _id, book_title, image_uri, book_description, category, price } = useLoaderData();
  const [cart, setCart] = useCart();// Get the addToCart function from the cart context

  const handleBuyNow = () => {
    const book = {
      _id,
      book_title,
      image_uri,
      book_description,
      category,
      price,
    };

    setCart([...cart, book]);
    toast.success('Item added to cart');
  };

  return (
    <div className='px-5 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={image_uri} alt="" className='rounded md:w-7/12 py-10' />
      </div>
      <div className='md:w-1/2 space-y-3'>
        <h2 className='favbook font-bold my-5 md:w-3/4 leading-snug'>
          {book_title} <span className='text-blue-700'><br />Book Here !</span>
        </h2>
        <h1 className='text-blue-700'><br />Description</h1>
        <h3 className='mb-10 text-lg md:w-5/6'>{book_description}</h3>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <p className='text-base'>Book Category</p>
            <h3 className='favbook font-bold'>{category}</h3>
          </div>
          <div>
            <h3 className='favbook font-bold'>${price}</h3>
            <p className='text-base'>Book price</p>
          </div>
          <div>
          <button
              className="bg-green-600 text-white px-2 py-2 rounded-full hover-bg-green-700"
              onClick={handleBuyNow}
            >
              Add to cart
            </button>
          </div>
        </div>
        <Link to="/shop" className='mt-12 block'>
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all transition-all-300'>
            Explore More
          </button>
        </Link>
      </div>
      <ToastContainer /> {/* Add the toast container here */}
    </div>
  );
};

export default Singlebook;

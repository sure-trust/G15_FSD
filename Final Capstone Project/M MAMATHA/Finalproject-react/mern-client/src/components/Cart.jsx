import React from 'react';
import { useCart } from '../contexts/cart1';

const Cart = () => {
  const [cart, setCart] = useCart();

  const handleRemoveFromCart = (bookId) => {
    // Implement the logic to remove a book from the cart by ID
    const updatedCart = cart.filter((book) => book._id !== bookId);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto mt-4 px-4">
      <h2 className="text-4xl font-bold text-center mb-4 px-5 py-5">Your Shopping Cart</h2>
      {cart.length > 0 ? (
        <div className="flex flex-wrap -m-4">
          {cart.map((book) => (
            <div key={book.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white shadow-md rounded-lg">
                <img
                  src={book.image_uri}
                  alt={book.book_title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{book.book_title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Category: {book.category}</p>
                  <p className="text-2xl font-semibold text-green-600 mb-2">Price: ${book.price}</p>
                  
               
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                    onClick={() => handleRemoveFromCart(book._id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <center>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Brand: {product.brand}</p>
        <p>Vendor: {product.vendor}</p>
      </center>
    </div>
  );
};

export default ProductDetails;

import React from 'react';

const ProductDetails = ({ data }) => {
  if (!data) {
    return <div>No product selected</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <ul>
        <li>ID: {data.id}</li>
        <li>Name: {data.name}</li>
        <li>Price: {data.price}</li>
        <li>Brand: {data.brand}</li>
        <li>Vendor: {data.vendor}</li>
       
      </ul>
    </div>
  );
};

export default ProductDetails;
 
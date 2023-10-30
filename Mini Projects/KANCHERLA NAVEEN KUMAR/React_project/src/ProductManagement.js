import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';

const ProductManagement = () => {

  const [product, setProduct] = useState(null);

  const handleFormSubmit = (data) => {
    setProduct(data);
  };

  return (
    <div style={{color:'white',fontWeight:700}}>
        <center>
      <h1>Product Management</h1>
      <ProductInfo onFormSubmit={handleFormSubmit} />
      <hr />
      <h2>Product Details</h2>
      
     {/* here i  used ternary operator for condition making*/}
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <p>Submit the form to view product details.</p>
      )}
      </center>
    </div>
  );
};

export default ProductManagement;

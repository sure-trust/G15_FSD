
import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import '../style/ProductManagement.css';

const ProductManagement = () => {
  const [productData, setProductData] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleProductSubmit = (data) => {
    setProductData(data);
    setShowProductDetails(true);
  };

  return (
    <div>
      <h2>Product Management</h2>
      <ProductInfo onSubmit={handleProductSubmit} />
      <button
        className={`toggle-button ${showProductDetails ? 'active' : ''}`}
        onClick={() => setShowProductDetails(!showProductDetails)}
      >
        {showProductDetails ? '✖' : '+'}
      </button>
      {showProductDetails && <ProductDetails data={productData} />}
    </div>
  );
};

export default ProductManagement;

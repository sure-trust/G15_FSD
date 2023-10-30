import React, { useState } from 'react';
import '../style/ProductInfo.css';

const ProductInfo = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    brand: '',
    vendor: '',
  });

  const [errors, setErrors] = useState({
    id: '',
    name: '',
    price: '',
    brand: '',
    vendor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    // Clear the error message when the user starts typing in a field
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form fields before submitting
    const validationErrors = {};

    if (!product.id) {
      validationErrors.id = 'ID is required';
    }

    if (!product.name) {
      validationErrors.name = 'Name is required';
    }

    if (!product.price) {
      validationErrors.price = 'Price is required';
    } else if (isNaN(Number(product.price))) {
      validationErrors.price = 'Price must be a number';
    }

    if (!product.brand) {
      validationErrors.brand = 'Brand is required';
    }

    if (!product.vendor) {
      validationErrors.vendor = 'Vendor is required';
    }

    // If there are validation errors, display them
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If there are no errors, submit the form
      onSubmit(product);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input type="text" name="id" value={product.id} onChange={handleChange} />
        <span className="error">{errors.id}</span>
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} />
        <span className="error">{errors.name}</span>
      </div>
      <div>
        <label>Price:</label>
        <input type="text" name="price" value={product.price} onChange={handleChange} />
        <span className="error">{errors.price}</span>
      </div>
      <div>
        <label>Brand:</label>
        <input type="text" name="brand" value={product.brand} onChange={handleChange} />
        <span className="error">{errors.brand}</span>
      </div>
      <div>
        <label>Vendor:</label>
        <input type="text" name="vendor" value={product.vendor} onChange={handleChange} />
        <span className="error">{errors.vendor}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductInfo;


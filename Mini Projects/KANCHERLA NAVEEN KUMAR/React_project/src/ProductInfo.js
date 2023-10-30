import React, { useState } from 'react';

const ProductInfo = ({ onFormSubmit }) => {
  const [productData, setProductData] = useState({
    id: '',
    name: '',
    price: '',
    brand: '',
    vendor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(productData);
  };

  return (
    <div>
      <h2>Product Information</h2>
      <center>
      <form style={{color:'white',fontWeight:600,width:'50%'}} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            onChange={handleChange}
            value={productData.id}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={productData.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={handleChange}
            value={productData.price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            className="form-control"
            id="brand"
            name="brand"
            onChange={handleChange}
            value={productData.brand}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vendor">Vendor:</label>
          <input
            type="text"
            className="form-control"
            id="vendor"
            name="vendor"
            onChange={handleChange}
            value={productData.vendor}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </center>
    </div>
  );
};

export default ProductInfo;

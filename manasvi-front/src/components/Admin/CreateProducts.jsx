import React, { useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

const CreateProducts = () => {
  const [product, setProduct] = useState({ name: '', description: '', image: null, link: '' });
  const [submittedProduct, setSubmittedProduct] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('image', product.image);
      formData.append('link', product.link);

      const response = await axios.post('http://localhost:5000/projects/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSubmittedProduct(response.data.project);
      setProduct({ name: '', description: '', image: null, link: '' });
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to create product');
      console.error('Error creating product:', error);
    }
  };

  return (
    <Admin>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">Product Link</label>
            <input
              type="url"
              name="link"
              value={product.link}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product link"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>

        {error && <div className="mt-4 p-2 bg-red-100 text-red-600 rounded-lg">{error}</div>}

        {submittedProduct && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{submittedProduct.name}</h2>
            <p className="mb-2">{submittedProduct.description}</p>
            {submittedProduct.image && <img src={`data:image/jpeg;base64,${submittedProduct.image}`} alt={submittedProduct.name} className="max-w-xs h-auto rounded" />}
            {submittedProduct.link && <a href={submittedProduct.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Product</a>}
          </div>
        )}
      </div>
    </Admin>
  );
};

export default CreateProducts;

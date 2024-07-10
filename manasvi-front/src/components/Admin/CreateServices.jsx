import React, { useState } from 'react';
import axios from 'axios';

const CreateServices = () => {
  const [service, setService] = useState({ number: '', title: '', description: '' });
  const [submittedService, setSubmittedService] = useState(null);

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/services/create', service);
      setSubmittedService(response.data);
      setService({ number: '', title: '', description: '' });
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  return (
    <div className="container mx-auto bg-slate-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Create Service</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">Service Serial Number</label>
          <input
            type="number"
            name="number"
            value={service.number}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter service serial number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Service Title</label>
          <input
            type="text"
            name="title"
            value={service.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter service title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            name="description"
            value={service.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter service description"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>

      {submittedService && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Submitted Service</h1>
          <p className="mb-2">Serial number: {submittedService.number}</p>
          <h2 className="text-xl font-bold mb-2">{submittedService.title}</h2>
          <p className="mb-2">{submittedService.description}</p>
        </div>
      )}
    </div>
  );
};

export default CreateServices;

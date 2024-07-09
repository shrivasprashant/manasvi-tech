// src/components/CreateProject.jsx

import React, { useState } from 'react';

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, description, image });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100 shadow-2xl">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-8 text-center  text-gray-800">Create a New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 mb-6">
            <input
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              type="text"
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="description"
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <input
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Create Project
          </button>
        </form>
        {preview && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Image Preview</h3>
            <img src={preview} alt="Project Preview" className="mt-4 rounded-lg shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProject;

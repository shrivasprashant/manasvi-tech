import React, { useState } from 'react';

const CreateTeam = () => {
  const [teams, setTeams] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeams([...teams, formData]);
    setFormData({
      name: '',
      designation: '',
      image: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl mt-8 font-extrabold text-white bg-purple-500 px-3 py-2 border rounded-xl shadow-lg">
        Create Team
      </h1>
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Image URL</label>
          <input
            type="file"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
          Add Team Member
        </button>
      </form>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Team cards */}
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={team.image || 'https://via.placeholder.com/150'}
              alt={team.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{team.name}</h3>
            <p className="text-gray-600">{team.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTeam;
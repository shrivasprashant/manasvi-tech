import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  console.log(selectedProject);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [link, setLink] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/projects/all');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('link', link);
      if (image) {
        formData.append('image', image);
      }

      await axios.put(`http://localhost:5000/projects/update/${selectedProject._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchProjects();
      setSelectedProject(null);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await axios.delete(`http://localhost:5000/projects/delete/${projectId}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const selectProject = (project) => {
    setSelectedProject(project);
    setName(project.name);
    setDescription(project.description);
    setLink(project.link || '');
  };

  return (
    <Admin>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Project Management</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {projects.map((project) => (
            <div key={project._id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={`data:image/jpeg;base64,${project.image}`}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-2">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Project
                </a>
              )}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => selectProject(project)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <form onSubmit={handleUpdate} className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Update Project</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="link" className="block text-lg font-medium text-gray-700">
                Project Link
              </label>
              <input
                type="url"
                id="link"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter project link"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-lg font-medium text-gray-700">
                Change Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/jpeg,image/png"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Update Project
            </button>
          </form>
        )}
      </div>
    </Admin>
  );
};

export default ProjectManagement;

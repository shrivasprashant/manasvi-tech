import Project from '../models/projectModel.js';

export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file;

    if (!name || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new project instance
    const newProject = new Project({
      name,
      description,
      image: image.buffer.toString('base64'),
    });

    // Save the project to the database
    await newProject.save();

    return res.status(201).json({
      message: 'Project created successfully.',
      success: true,
      project: newProject,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    // Fetch all projects
    const projects = await Project.find();

    return res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

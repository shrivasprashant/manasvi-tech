import Team from '../models/teamModel.js';

export const createTeamMember = async (req, res) => {
  try {
    const { name, designation, image } = req.body;

    // Validate required fields
    if (!name || !designation || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new team member instance
    const newTeamMember = new Team({
      name,
      designation,
      image,
    });

    // Save the team member to the database
    await newTeamMember.save();

    return res.status(201).json({
      message: 'Team member created successfully.',
      success: true,
      teamMember: newTeamMember,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllTeamMembers = async (req, res) => {
  try {
    // Fetch all team members
    const teamMembers = await Team.find();

    return res.status(200).json(teamMembers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

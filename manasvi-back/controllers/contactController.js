import Contact from '../models/contactModel.js';

export const createContact = async (req, res) => {
  try {
    const { name, address, phoneNumber, email, message } = req.body;

    // Validate required fields
    if (!name || !address || !phoneNumber || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new contact instance
    const newContact = new Contact({
      name,
      address,
      phoneNumber,
      email,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    return res.status(201).json({
      message: 'Contact created successfully.',
      success: true,
      contact: newContact,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    // Fetch all contacts
    const contacts = await Contact.find();

    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

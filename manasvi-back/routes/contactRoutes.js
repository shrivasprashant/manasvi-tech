import express from 'express';
import { createContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

// Routes for contacts
router.post('/create', createContact);
router.get('/all', getAllContacts);

export default router;

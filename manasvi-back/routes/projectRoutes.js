import express from 'express';
import { createProject, getAllProjects } from '../controllers/projectController.js';
import multer from 'multer';

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Routes for projects
router.post('/create', upload.single('image'), createProject); // Correct way to use multer with route
router.get('/all', getAllProjects);

export default router;

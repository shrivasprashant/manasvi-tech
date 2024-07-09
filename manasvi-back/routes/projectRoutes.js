import express from 'express';
import { createProject, getAllProjects } from '../controllers/projectController.js';

const router = express.Router();

// Routes for projects
router.post('/create', createProject);
router.get('/all', getAllProjects);

export default router;

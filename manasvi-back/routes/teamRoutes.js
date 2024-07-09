import express from 'express';
import { createTeamMember, getAllTeamMembers } from '../controllers/teamController.js';

const router = express.Router();

// Routes for team members
router.post('/create', createTeamMember);
router.get('/all', getAllTeamMembers);

export default router;

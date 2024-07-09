import express from 'express';
import { createService, getAllServices } from '../controllers/serviceController.js';

const router = express.Router();

// Routes for services
router.post('/create', createService);
router.get('/all', getAllServices);

export default router;

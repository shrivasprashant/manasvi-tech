import express from 'express';
import { createReview, getAllReviews } from '../controllers/reviewController.js';

const router = express.Router();

// Routes for reviews
router.post('/create', createReview);
router.get('/all', getAllReviews);

export default router;

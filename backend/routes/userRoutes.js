import { Router } from 'express';
import { updateProfile, deleteResume, getPublicProfile } from '../controllers/userControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

export const router = Router();

// Protected routes
router.put('/profile', protect, updateProfile);
router.post('/resume', protect, deleteResume);

// Public route
router.get('/:id', getPublicProfile);

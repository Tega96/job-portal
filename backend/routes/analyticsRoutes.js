import { Router } from 'express'
import {getEmployerAnalytics} from '../controllers/analyticsControllers.js'
import { protect } from '../middlewares/authMiddleware.js'

export const router = Router();

router.get("/overview", protect, getEmployerAnalytics);
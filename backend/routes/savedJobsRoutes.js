import { Router } from 'express'
import {
    saveJob,
    unsaveJob,
    getMySavedJobs,
} from '../controllers/savedJobsControllers.js'
import { protect } from '../middlewares/authMiddleware.js';


export const router = Router();

router.post("/:jobId", protect, saveJob);
router.delete("/:jobId", protect, unsaveJob);
router.get("/my", protect, getMySavedJobs)
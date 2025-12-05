import { Router } from 'express'
import {
    createJob, 
    getJobs,
    getJobById,
    updateJob,
    deleteJob,
    toggleCloseJob,
    getJobsEmployer,
} from '../controllers/jobControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

export const router = Router()

router.route('/').post(protect, createJob).get(getJobs);
router.route('/get-jobs-employer').get(protect, getJobsEmployer);
router.route("/:id").get(getJobById).put(protect, updateJob).delete(protect, deleteJob);
router.put("/:id/toggle-close", protect, toggleCloseJob);
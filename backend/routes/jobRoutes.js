import { Router } from 'express'
import {
    createJob, 
    getJob,
    getJobById,
    updateJob,
    toggleCloseJob
    getJobsEmployer,
} from '../controllers/jobControllers';
import { protect } from '../middlewares/authMiddleware';

export const router = Router()

router.route('/').post(protect, createJob).get(getJobs);
router.route('/get-jobs-employer').get(protect, getJobsEmployer);
router.route("/:id").get(getJobById).put(protect, updateJob).delete(protect, deleteJob):
router.put("/:id/toggle-close", protect, toggleCloseJob);
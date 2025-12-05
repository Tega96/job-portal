import SavedJobs from "../models/SavedJob.js";

//@desc Save a Job
export const saveJob = async (req, res) => {
    try {
        const exist = await SavedJobs.findOne({ job: req.params.jobId, jobseeker: req.user._id })
        if (exists) return res.status(400).json({message: "Job already saved"});

        const saved = await SavedJobs.create({ job: req.params.jobId, jobseeker: req.user._id });
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json({ message: "Failed to save job", error: error.message })
    }
}

//@desc Unsave a Job
export const unsaveJob = async (req, res) => {
    try {
        await SavedJobs.findOneAndDelete({job: req.params.jobId, jobseeker: req.user._id });
        res.json({message: "Job removed from saved list"})
    } catch (error) {
        res.status(500).json({ message: "Failed to remove job", error: error.message })
    }
}

//@desc Get a saved job for current user
export const getMySavedJobs = async (req, res) => {
    try {
        const savedJobs = await SavedJobs.find({ jobseeker: req.user._id })
            .populate({
                path: "job",
                populate: {
                    path: "company",
                    select: "name companyName companyLogo",
                },
            })

        res.json(savedJobs);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch job", error: error.message })
    }
}
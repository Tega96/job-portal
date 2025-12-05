import Job from '../models/Jobs'
import User from '../models/User.js'
import Application from '../models/Application.js'
import SavedJob from '../models/SavedJob.js'

// @desc Create a new job (Employer only)
export const createJob = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getJobs = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//d@desc Get jobs for logged in user (Employer can see posted jobs)
export const getJobEmployer = async (req, res) => {

}

//@desc  Get single job by ID
export const getJobById = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// @desc Update a job (Employer only)
export const updateJob = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//@desc  Delete a job (Employer only)
export const deleteJob = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// @desc  Toggle Close Status for a job (Employer only)
export const toggleCloseJob = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getJobs = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
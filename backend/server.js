import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { fileURLToPath } from 'url'
import {dirname, join} from 'path'
import connectDB from './config/db.js'
import {router as authRoutes} from "./routes/authRoutes.js"
import {router as userRoutes} from "./routes/userRoutes.js"
import {router as jobRoutes} from "./routes/jobRoutes.js"
import {router as applicationRoutes} from './routes/applicationRoutes.js'
import {router as savedJobsRoutes} from './routes/savedJobsRoutes.js'
import {router as analyticsRoutes} from './routes/analyticsRoutes.js'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const app = express() 
const PORT = process.env.PORT || 3300

// Midleware to handle CORS
app.use(
    cors({
        origin: process.env.ALLOWED_ORIGIN || `http://localhost:${PORT}`,
        methods: ['GET', "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Connect to Database
connectDB();

// Middleware
app.use(express.json)
// app.use(express.urlencoded({extended: true}))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/jobs", jobRoutes)
app.use("/api/application", applicationRoutes)
app.use("/save-jobs", savedJobsRoutes)
app.use("/analytics", analyticsRoutes)

// Serve uploads folder
app.use("/uploads", express.static(join(__dirname, "uploads")));

app.get('/', (req, res) => {
    res.send('Hello world')
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import connectDB from './config/db.js'
// import authRoutes from "./routes/authRoutes"

dotenv.config();

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
// app.use("/api/auth", authRoutes)

// Serve uploads folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

app.get('/', (req, res) => {
    res.send('Hello world')
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
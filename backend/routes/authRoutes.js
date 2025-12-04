import { Router } from 'express'
import {register, login, getMe} from '../controllers/authControllers.js'
import { protect } from '../middlewares/authMiddleware.js'
import upload from '../middlewares/uploadMiddleware.js';


export const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe)

router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get(host)}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl })
})

import express from 'express';
import verifyUser from '../middleware/middleware.js';

const router = express.Router()

router.post('/add', verifyUser, async (req, res) => {
    try {
        const {title, description} = req.body;

        const newNote = new Note({
            title,
            description,
            userId: req.user.id
        })
    } catch (error) {
        return res.status(500).json({success: false, message: "Please login"})
    }
})

export default router
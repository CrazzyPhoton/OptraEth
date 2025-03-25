import express from 'express';
import Waitlist from '../models/Waitlist.js';

const router = express.Router();

// POST endpoint to save form data
router.post('/', async (req, res) => {
    try {
        const { email, walletAddress } = req.body;

        // Check if the entry already exists
        const existingEntry = await Waitlist.findOne({
            $or: [{ email }, { walletAddress }]
        });

        if (existingEntry) {
            return res.status(409).json({ message: 'Entry already exists in the waitlist' });
        }

        // Create a new entry if it doesn't exist
        const newEntry = new Waitlist({ email, walletAddress });
        await newEntry.save();
        res.status(201).json({ message: 'Waitlist entry saved successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save entry' });
    }
});

export default router;

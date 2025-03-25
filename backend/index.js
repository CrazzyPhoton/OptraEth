import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import waitlistRoutes from './routes/waitlistRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/waitlist', waitlistRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('DB connection error:', err));

// Export as a Serverless Function (for Vercel)
export default (req, res) => app(req, res);

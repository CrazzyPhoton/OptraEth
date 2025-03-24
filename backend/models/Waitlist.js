import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  email: { type: String, required: true },
  walletAddress: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Waitlist', waitlistSchema);

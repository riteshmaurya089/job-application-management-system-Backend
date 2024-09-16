
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Define routes
const jobRoutes = require('./routes/jobRoutes');
const applicantRoutes = require('./routes/applicantRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api', jobRoutes);
app.use('/api', applicantRoutes);
app.use('/api', interviewRoutes);
app.use('/api', authRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


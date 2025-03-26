const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();

const app = express();
// app.use(cors());
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", // Replace this with your frontend port (e.g., Vite's default)
    credentials: true,
  }));

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 50005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
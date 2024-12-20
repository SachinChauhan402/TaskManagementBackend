// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// Database Connection
const db = require('./db');
db.connect();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
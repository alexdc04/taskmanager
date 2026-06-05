// imports
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db.js');
const cors = require('cors');

const env = require('dotenv').config();
const app = express();
const PORT = 5000;

const data_URL = process.env.SUPABASE_LINK;
const data_PASS = process.env.SUPABASE_PASSWORD;

app.use(cors())

// basic route on the home page
app.get('/', (req, res) => {
  res.send('home.');
});

// submit a new task
app.post('/api/tasksubmit', (req, res) => {
  const { task_name, start_time, due_date } = req.body;

  // validate fields are full
  if (!task_name || !start_time || !due_date) {
    return res.status(400).json({ error: 'Each task needs a name, start time, and due date.'});
  }

});

// begin server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

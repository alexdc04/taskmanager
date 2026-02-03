// imports
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db.js');

const env = require('dotenv').config();
const app = express();
const PORT = 3000;

const data_URL = process.env.SUPABASE_LINK;
const data_PASS = process.env.SUPABASE_PASSWORD;

// basic route on the home page
app.get('/', (req, res) => {
  res.send('home.');
});

// test for a new page
app.get('/test', (req, res) => {
    res.send('test page.');
});

// begin server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const express = require('express');
const path = require('path');
const router = express.Router();

// Define the home route for items
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'index.html');
  res.sendFile(filePath);
});

router.post('/items', (req, res) => {
  res.send('Got a post request!!');
});

router.put('/items/:id', (req, res) => {
  res.json({ x: 1, y: 2, z: 3 });
});

router.delete('/itemd', (req, res) => {
  res.send('Got a delete request!!');
});

module.exports = router;

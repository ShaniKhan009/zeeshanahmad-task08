const express = require('express');
const router = express.Router();
const fs = require('fs-extra');

router.get('/', async (req, res) => {
  const filePath = '../data.txt'; 
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    res.status(200).send(content);
  } catch (err) {
    res.status(500).send('Error reading file');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const fs = require('fs-extra');

router.post('/', async (req, res) => {
  const filePath = '../data.txt';
  const { data } = req.body;

  if (!data) {
    return res.status(400).send('No data provided');
  }

  try {
    await fs.writeFile(filePath, data, 'utf-8');
    res.status(200).send('File written successfully');
  } catch (err) {
    res.status(500).send('Error writing file');
  }
});

module.exports = router;

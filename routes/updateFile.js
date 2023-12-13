const express = require('express');
const router = express.Router();
const fs = require('fs-extra');

router.put('/', async (req, res) => {
  const filePath = '../data.txt';
  const { newData } = req.body;

  if (!newData) {
    return res.status(400).send('No new data provided');
  }

  try {
    await fs.appendFile(filePath, `\n${newData}`, 'utf-8');
    res.status(200).send('File updated successfully');
  } catch (err) {
    res.status(500).send('Error updating file');
  }
});

module.exports = router;

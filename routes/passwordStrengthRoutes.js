const express = require('express');
const router = express.Router();

router.post('/check', (req, res) => {
    res.json({ strength: 'strong', message: 'Password strength checked!' });
  });

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {

    res.json({ success: true, message: 'Products retrieved successfully!' });
  });
  
  router.post('/checkout', (req, res) => {

    res.json({ success: true, message: 'Checkout completed successfully!' });
  });

module.exports = router;

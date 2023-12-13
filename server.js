const express = require('express');
const app = express();
const readFileRoute = require('./routes/readFile');
const writeFileRoute = require('./routes/writeFile');
const updateFileRoute = require('./routes/updateFile');
const ecommerceRoutes = require('./routes/ecommerceRoutes');
const passwordStrengthRoutes = require('./routes/passwordStrengthRoutes');

// Use middleware to parse JSON
app.use(express.json());

// Mounting route files
app.use('/readFile', readFileRoute);
app.use('/writeFile', writeFileRoute);
app.use('/updateFile', updateFileRoute);
app.use('/ecommerce', ecommerceRoutes); 
app.use('/password', passwordStrengthRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

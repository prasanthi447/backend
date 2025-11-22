const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://prasanthi:prasanthi@cluster0.ltcmtiv.mongodb.net/inventory')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use('/api', productRoutes);


app.listen(8989, () => {
  console.log('Server running on port 8989');
});

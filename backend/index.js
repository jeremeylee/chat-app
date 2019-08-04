const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const app = express();

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MONGODB Connected');
  })
  .catch(error => console.error(error));

app.get('/', (req, res) => {
  res.send('hello');
});

PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

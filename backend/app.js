const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const loginRouter = require('./controllers/login');
const registerRouter = require('./controllers/register');
const messageRouter = require('./controllers/message');

const app = express();

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MONGODB Connected');
  })
  .catch(error => console.error(error));
  
app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', messageRouter);

module.exports = app;
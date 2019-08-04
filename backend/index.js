const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const Message = require('./models/message');

const app = express();

app.use(bodyParser.json());

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MONGODB Connected');
  })
  .catch(error => console.error(error));

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/api/messages', async (req, res, next) => {
  const { body } = req;
  try {
    const newMessage = new Message({
      message: body.message,
      date: new Date(),
    });

    const savedMessage = await newMessage.save();
    res.json(savedMessage.toJSON());
  } catch (exception) {
    next(exception);
  }
});

const errorHandler = (err, req, res, next) => {
  console.error(err);
}

PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

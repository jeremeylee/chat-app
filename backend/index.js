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

app.get('/api/messages', async (req, res, next) => {
  try {
    const messages = await Message.find({});
    res.json(messages.map(message => message.toJSON()));
  } catch (exception) {
    next(exception);
  }
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

app.put('/api/messages/:id', async (req, res, next) => {
  const { body } = req;
  try {
    const editMessage = {
      message: body.message,
    };

    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, editMessage, { new: true });
    res.json(updatedMessage.toJSON());
  } catch (exception) {
    next(exception);
  }
});

app.delete('/api/messages/:id', async (req, res, next) => {
  try {
    await Message.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

const errorHandler = (err, req, res, next) => {
  console.error(err);
};

PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

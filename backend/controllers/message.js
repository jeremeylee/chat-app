const messageRouter = require('express').Router();
const Message = require('../models/message');

messageRouter.get('/api/messages', async (req, res, next) => {
  try {
    const messages = await Message.find({});
    res.json(messages.map(message => message.toJSON()));
  } catch (exception) {
    next(exception);
  }
});

module.exports = messageRouter;

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const Message = require('./models/message');
const User = require('./models/user');

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

app.post('/register', async (req, res, next) => {
  const { body } = req;
  try {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        next(err);
      }
      bcrypt.hash(body.password, salt, async (err, hash) => {
        if (err) {
          next(err);
        }
        const newUser = new User({
          username: body.username,
          password: hash,
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser.toJSON());
      });
    });
  } catch (exception) {
    next(exception);
  }
});

app.post('/login', async (req, res, next) => {
  const { body } = req;
  try {
    const user = await User.findOne({ username: body.username });
    console.log(user);
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(body.password, user.password);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid username or password',
      });
    }
    
    const token = jwt.sign(body, config.PRIVATE_KEY);

    res.status(200).send({ token, username: user.username });
  } catch (exception) {
    next(exception);
  }
});

io.on('connection', (socket) => {
  console.log('Socket connected');
  socket.on('newMessage', async (data) => {
    const newMessage = new Message({
      message: data.message,
      username: data.username,
      data: new Date(),
    });
    const savedMessage = await newMessage.save();
    console.log(savedMessage.toJSON());
    io.emit('newMessage', savedMessage.toJSON());
  });
  socket.on('editMessage', async (data) => {
    console.log('data: ', data);
    const editMessage = {
      message: data.message,
      username: data.username,
      id: data.id,
    };
    const updatedMessage = await Message.findByIdAndUpdate(data.id, editMessage, { new: true });
    console.log(updatedMessage.toJSON());
    io.emit('editMessage', updatedMessage.toJSON());
  });
  socket.on('deleteMessage', async (data) => {
    const deletedMessage = await Message.findByIdAndRemove(data);
    console.log(deletedMessage.toJSON());
    io.emit('deleteMessage', deletedMessage.toJSON());
  });
});


/* app.post('/api/messages', async (req, res, next) => {
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
}); */

/* app.put('/api/messages/:id', async (req, res, next) => {
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
}); */

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

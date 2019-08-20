const app = require('./app');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Message = require('./models/message');

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

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

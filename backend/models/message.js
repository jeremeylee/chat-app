const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const messageSchema = new mongoose.Schema({
  message: String,
  date: Date,
  username: String,
});

messageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Message', messageSchema);

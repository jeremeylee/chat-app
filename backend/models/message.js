const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  message: String,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User',
  },
});

messageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Message', messageSchema);
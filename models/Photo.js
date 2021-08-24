const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photo = new Schema({
  _id: Schema.Types.ObjectId,

  id: String,

  author: String,

  date: {
    type: String,
    default: Date.now,
  },

  title: String,

  content: String,

  comments: [
    {
      id: String,
      author: String,
      date: {
        type: String,
        default: Date.now,
      },
      content: String,
    },
  ],
});

module.exports = mongoose.models.Photo || mongoose.model('Photo', photo);

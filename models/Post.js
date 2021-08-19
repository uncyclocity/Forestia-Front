const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
  id: String,

  author: String,

  date: {
    type: Date,
    default: Date.now,
  },

  title: String,

  content: String,

  comments: [
    {
      id: String,
      author: String,
      date: {
        type: Date,
        default: Date.now,
      },
      content: String,
    },
  ],
});

module.exports = mongoose.model('Post', post);

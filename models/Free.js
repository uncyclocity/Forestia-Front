const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const free = new Schema({
  _id: Schema.Types.ObjectId,

  id: String,

  author: String,

  date: {
    type: String,
    default: Date.now,
  },

  title: String,

  content: String,

  up: Int32Array,

  down: Int32Array,

  comments: [
    {
      id: String,
      author: String,
      date: {
        type: String,
        default: Date.now,
      },
      content: String,
      up: Int32Array,
      down: Int32Array,
      reply: [
        {
          id: String,
          author: String,
          to: String,
          date: {
            type: String,
            default: Date.now,
          },
          content: String,
          up: Int32Array,
          down: Int32Array,
        },
      ],
    },
  ],
});

module.exports = mongoose.models.Free || mongoose.model('Free', free);

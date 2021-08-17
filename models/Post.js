const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
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

const Posts = mongoose.model('posts', PostSchema);
export default Posts;

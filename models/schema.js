const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  id: String,
  author: String,
  date: String,
  title: String,
  content: String,
  comments: [
    {
      id: String,
      author: String,
      date: String,
      content: String,
    },
  ],
});

const Posts = mongoose.model('posts', PostSchema);
export default Posts;

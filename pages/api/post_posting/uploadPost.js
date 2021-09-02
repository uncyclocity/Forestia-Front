import connectDB from '../../../middleware/mongodb';
import Free from '../../../models/Free';
import Photo from '../../../models/Photo';
import mongoose from 'mongoose';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { boardType, id, author, date, title, content, comments } = req.body;
    if (id >= 0 && author && date && title && content && comments) {
      try {
        var post_obj = {
          _id: new mongoose.Types.ObjectId(),
          id,
          author,
          date,
          title,
          content,
          up: { amount: 0, clicker: [] },
          down: { amount: 0, clicker: [] },
          comments,
        };
        if (boardType === 'free') {
          var post = new Free(post_obj);
        } else if (boardType === 'photo') {
          var post = new Photo(post_obj);
        }
        var postcreated = await post.save();
        return res.status(200).send(postcreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);

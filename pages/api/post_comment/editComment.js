import connectDB from '../../../middleware/mongodb';
import Free from '../../../models/Free';
import Photo from '../../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { boardType, post_id, comment_id, content } = req.body;
    if (comment_id >= 0 && post_id >= 0 && boardType && content) {
      try {
        if (boardType === 'free') {
          var post = await Free.findOne({ id: post_id });
        } else if (boardType === 'photo') {
          var post = await Photo.findOne({ id: post_id });
        }
        var commentIdx = post.comments.findIndex(
          (comment) => comment.id === comment_id,
        );
        post.comments[commentIdx].content = content;
        var commUpdated = await post.save();
        return res.status(200).send(commUpdated);
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

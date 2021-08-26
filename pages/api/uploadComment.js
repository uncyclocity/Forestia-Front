import connectDB from '../../middleware/mongodb';
import Free from '../../models/Free';
import Photo from '../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { boardType, postid, id, author, date, content } = req.body;
    if (id >= 0 && author && date && content) {
      try {
        var newComment = {
          id,
          author,
          date,
          content,
        };
        if (boardType === 'free') {
          var post = await Free.findOne({ id: postid });
          console.log(post);
        } else if (boardType === 'photo') {
          var post = await Photo.findOne({ id: postid });
        }
        post.comments.push(newComment);
        var postupdated = await post.save();
        return res.status(200).send(postupdated);
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
